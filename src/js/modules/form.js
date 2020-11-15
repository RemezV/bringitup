export default class Form {
    constructor(forms, path) {
        this.forms = document.querySelectorAll(forms);
        this.messages = {
            loading: 'Loading...',
            success: 'Thank you! We will contact you shortly',
            failure: 'Wooops! Something wrong...'
        };
        this.path = path; 
    }
    validateText () {
        const mailInputs = document.querySelectorAll('[type="email"]');
    
        mailInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
                    e.preventDefault();
                }
            });
        });
    }
    initMask () {
        const setCursorPosition = (pos, elem) => {
            elem.focus();
    
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
    
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
    
        function createMask(event) {
            let matrix = '+1 (___) ___-____';
            let i = 0;
            let def = matrix.replace(/\D/g, '');
            let val = this.value.replace(/\D/g, '');
            
            if (def.length >= val.length) {
                val = def;
            }
    
            this.value = matrix.replace(/./g, function(c) {
                return /[_\d]/.test(c) && i < val.length ? val.charAt(i++) : 
                i >= val.length ? '' : c;
            });
    
            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                } 
            } else {
                setCursorPosition(this.value.length, this);
            }
        }
    
        let inputs = document.querySelectorAll('[name="phone"]');
        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }
    async postData (url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    }
    init() {
        this.validateText();
        this.initMask();
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `;
                form.parentNode.append(statusMessage);
                statusMessage.textContent = this.messages.loading;
                const formData = new FormData(form);
                this.postData(this.path, formData)
                    .then(res => {
                        statusMessage.textContent = this.messages.success;
                    })
                    .catch(() => statusMessage.textContent = this.messages.failure)
                    .finally(() => {
                        form.reset();
                        setTimeout(() => statusMessage.remove(), 3000);
                    });
            });
        });
    }
}