export default class Logic {
    _field = [];
    constructor(size) {
        for(let i = 0; i < size; i++) {
            this._field.push(new Array(size));
        }
    }

    get field() {
        return this._field.map((row) => [...row]);
    }

    isFilled = (x, y) => {
        return !!this._field[y][x]
    }
    _playerSwitch = true;
    setPoint({x,y}){
        this._field[x][y] = this._playerSwitch ? 'X' : 'O'
        this._playerSwitch = !this._playerSwitch
    }

    isWin({x,y}){
        const field = this._field;
        return _isRow() || _isCollumn() || _isFirstDiagonal() || _isSecondDiagonal();

        function _isRow(){
            let count = 1;
            for(let i = x+1; i < field.length; i++){
                if(field[y][x] !== field[y][i]) break;
                count++
            }
            for(let i = x-1; i >= 0; i--){
                if(field[y][x] !== field[y][i]) break;
                count++
            }
            return count >= 5
        }
        function _isCollumn(){
            let count = 1;
            for(let i = y+1; i < field.length; i++){
                if(field[y][x] !== field[i][x]) break;
                count++
            }
            for(let i = y-1; i >= 0; i--){
                if(field[y][x] !== field[i][x]) break;
                count++
            }
            return count >= 5
        }
        function _isFirstDiagonal(){
            let count = 1;
            for(
                let i = x + 1, j = y + 1;
                i < field.length && j < field.length;
                i++, j++
            ){
                if(field[x][y] !== field[i][j]) break;
                count++
            }
            for(
                let i = x - 1, j = y - 1;
                i > 0 && j > 0;
                i--, j--
            ){
                if(field[x][y] !== field[i][j]) break;
                count++
            }
            return count >= 5
        }
        function _isSecondDiagonal(){
            let count = 1;
            for(
                let i = x - 1, j = y + 1;
                i >= 0 && j < field.length;
                i--, j++
            ){
                if(field[x][y] !== field[i][j]) break;
                count++
            }
            for(
                let i = x + 1, j = y - 1;
                i < field.length && j >= 0;
                i--, j--
            ){
                if(field[x][y] !== field[i][j]) break;
                count++
            }
            return count >= 5
        }
    }
}