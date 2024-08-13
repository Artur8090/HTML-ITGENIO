export default class Logic {
    constructor(size) {
        this._field = [];
        for (let i = 0; i < size; i++) {
            this._field.push(new Array(size));
        }
        this._playerSwitch = true;
    }

    get field() {
        return this._field.map((row) => [...row]);
    }

    isFilled = (x, y) => {
        return !!this._field[y][x];
    }

    setPoint({ x, y }) {
        this._field[y][x] = this._playerSwitch ? 'X' : 'O';
        this._playerSwitch = !this._playerSwitch;
    }




    isWin({ x, y }) {
        const field = this._field;
        const player = field[y][x];

        return _isRow() || _isColumn() || _isFirstDiagonal() || _isSecondDiagonal();

        function _isRow() {
            let count = 1;
            for (let i = x + 1; i < field.length; i++) {
                if (field[y][x] !== field[y][i]) break;
                count++;
            }
            for (let i = x - 1; i >= 0; i--) {
                if (field[y][x] !== field[y][i]) break;
                count++;
            }
            return count >= 5;
        }

        function _isColumn() {
            let count = 1;
            for (let i = y + 1; i < field.length; i++) {
                if (field[y][x] !== field[i][x]) break;
                count++;
            }
            for (let i = y - 1; i >= 0; i--) {
                if (field[y][x] !== field[i][x]) break;
                count++;
            }
            return count >= 5;
        }

        function _isFirstDiagonal() {
            let count = 1;
            for (
                let i = x + 1, j = y + 1;
                i < field.length && j < field.length;
                i++, j++
            ) {
                if (field[y][x] !== field[j][i]) break;
                count++;
            }
            for (
                let i = x - 1, j = y - 1;
                i >= 0 && j >= 0;
                i--, j--
            ) {
                if (field[y][x] !== field[j][i]) break;
                count++;
            }
            return count >= 5;
        }

        function _isSecondDiagonal() {
            let count = 1;
            for (
                let i = x - 1, j = y + 1;
                i >= 0 && j < field.length;
                i--, j++
            ) {
                if (field[y][x] !== field[j][i]) break;
                count++;
            }
            for (
                let i = x + 1, j = y - 1;
                i < field.length && j >= 0;
                i++, j--
            ) {
                if (field[y][x] !== field[j][i]) break;
                count++;
            }
            return count >= 5;
        }
    }
}