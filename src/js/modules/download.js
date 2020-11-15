export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/EducationNowadays.pdf';
    }
    downloadItem(path) {
        const link = document.createElement('a');
        link.setAttribute('href', path);
        link.setAttribute('download', 'EducationNowadays');
        link.style.display = 'none';
        document.body.append(link);

        link.click();
        document.body.remove(link);
    }
    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.downloadItem(this.path);
            });
        });
    }
}