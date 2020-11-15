export default class Defferences {
    constructor(oldColomn, newColomn, points) {
        try {
            this.points = points;
            this.oldColomn = document.querySelector(oldColomn);
            this.newColomn = document.querySelector(newColomn);
            this.oldPoints = this.oldColomn.querySelectorAll(points);
            this.newPoints = this.newColomn.querySelectorAll(points);
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch(error){}
    }
    hidePoints(whichPoints) {
        whichPoints.forEach((point, i, arr) => {
            if (i != arr.length - 1) {
                point.style.display = 'none';
            }
        });
    }

    bindTriggers(column, whichPoints, counter) {
            column.querySelector('.card__click').addEventListener('click', () => {
            whichPoints[counter].style.display = 'flex';
            counter == whichPoints.length - 2 ? whichPoints[counter + 1].remove() : counter++;
        });
    }

    init() {
        try {
            this.hidePoints(this.oldPoints);
            this.hidePoints(this.newPoints);
            this.bindTriggers(this.oldColomn, this.oldPoints, this.oldCounter);
            this.bindTriggers(this.newColomn, this.newPoints, this.newCounter);
        } catch(error){}
    }
}