/*
const wait = (i, ms) => new Promise(resolve => setTimeout(() => resolve(i), ms))
const printNumbers = () => new Promise((resolve) => {
    let pr = Promise.resolve(0);
    for(let i = 1; i <= 10; i+= 1){
        pr = pr.then((val) => {
            console.log(val)
            return wait(i, Math.random() * 1000)
        })
    }
    resolve(pr);
})
printNumbers()

const wait = (i, ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));

const printNumbers = async () => {
    for(let i = 1; i <= 10; i++) {
        console.log(await wait(i - 1, Math.random() * 1000));
    }
};

printNumbers();
*/

async function canRejectOrReturn(){
    await new Promise(res => setTimeout(res, 1000));
    if (Math.random() > 0.5) {
        throw new Error('Извините слишком большое число');
    }
    return 'Идеальное число';
}

async function handleErrors() {
    try {
        const result = await canRejectOrReturn();
        console.log(result);
    } catch (error) {
        console.log('Ошибка перехвачена:', error.message);
    }
}