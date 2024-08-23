function start() {
    const cnv = document.querySelector('canvas')
    const ctx = cnv.getContext('2d')
    let centerX = 0;
    let centerY = 0;
    const maxWavesAmplitude = 17;
    const numberOfWaves = 7;
    const ringRadius = 200;
    function init() {
        cnv.width = window.innerWidth
        cnv.height = window.innerHeight
        centerX = cnv.width / 2;
        centerY = cnv.height / 2;
    }
    window.addEventListener('resize', init)

    init()
    const numberOfRings = 3;
    const ringRadiusOffset = 7;
    const waveOffset = 15;
    const colors = ['#771122','#bb1122','#ff1122']
    let startAngle = 0;
    function updateRings() {
        for (let i = 0; i < numberOfRings; i++) {
            let radius = i * ringRadiusOffset + ringRadius
            let offsetAngle = i * waveOffset * Math.PI / 180
            drawRings(radius,colors[i], offsetAngle);
        }
        startAngle >= 360 ? startAngle = 0 : startAngle++
    }
    function drawRings(radius, color, offsetAngle) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 9
        ctx.beginPath()
        ctx.moveTo(centerX + radius, centerY);
        for (let j = -180; j < 180; j++) {
            let currentAngle = (j + startAngle) * Math.PI / 180;
            let displacement = 0;
            let now = Math.abs(j)
            if(now > 70){ displacement = (now - 70) / 70};
            if(displacement >= 1) {displacement = 1}

            let waveAmplitude = displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWavesAmplitude
            let x = centerX + Math.cos(currentAngle) * (radius + waveAmplitude);
            let y = centerY + Math.sin(currentAngle) * (radius + waveAmplitude);
            j > -180 ? ctx.lineTo(x,y) : ctx.moveTo(x,y)

        }

        ctx.closePath();
        ctx.stroke();
    }
    function loop() {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        updateRings();
        window.requestAnimationFrame(loop);
    }
    loop();
    console.log('start')
}
start()