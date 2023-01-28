let PA1 = document.querySelector("#PA_S_tx")
let PA2 = document.querySelector("#PA_D_tx")
let res = document.querySelector("#tx_res")
let res1 = document.querySelector("#tx_res1")


let FC = document.querySelector('#tx_fc')
let res2 = document.querySelector('#tx_res2')

let SAT = document.querySelector('#tx_sat')
let res3 = document.querySelector('#tx_res3')

let TEM = document.querySelector('#tx_tem')
let res4 = document.querySelector('#tx_res4')

/*let glicemia = document.getElementById ('tx_gli')
let res5 = document.getElementById('tx_res5')
let jej = document.getElementById('_jejum')
*/



function verificar(){


if(Frecardiaca(FC.value)){

    res2.innerHTML = ''
    
    if(FC.value < 50 && FC.value > 1) {
        res2.innerHTML = `<p> <strong> Frequência cardíaca - </strong> O seu batimento cardiaco está abaixo dos padrões normais e pode trazer ríscos a sua saúde, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p>`
        }

    if(FC.value < 60 && FC.value >= 50) {
        res2.innerHTML = `<p> <strong> Frequência cardíaca - </strong> O Seu batimento cardiaco está abaixo dos padrões normais, se estiver em repouso é normal que seus batimentos se mantenham até nesta frequência. </p>`
    }

    if(FC.value <= 100 && FC.value > 60 ) {
        res2.innerHTML = `<p> <strong> Frequência cardíaca - </strong> O Seu batimento cardiaco está dentro dos padrões normais.</p>`
    }

    if(FC.value > 100 ) {
        res2.innerHTML = `<p> <strong> Frequência cardíaca - </strong> O Seu batimento cardiaco está acima dos padrões normais, tente relaxar, se tiver realizado alguma atividade física é normal que os batimentos se elevem. </p>`
    }

    if(FC.value > 120 ) {
        res2.innerHTML = `<p> <strong> Frequência cardíaca - </strong> O Seu batimento cardiaco está acima dos padrões normais e pode trazer ríscos a sua saúde, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p>`
    }
}


if(Temperatura(TEM.value)){

    res4.innerHTML = ''

    if(TEM.value <= 34.9){
    
        res4.innerHTML = `<p> <strong> Temperatura - </strong> A sua temperatura está <strong> MUITO </strong> abaixo dos valores normais, recomendamos ir ao pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU).</p>`
        
    }

    if(TEM.value <= 35.4 && TEM.value >= 35.0){
    
        res4.innerHTML = `<p> <strong> Temperatura - </strong> A sua temperatura está um pouco abaixo dos valores normais, caso esteja sentindo algum desconforto recomendamos verificar a temperatura a cada 4 horas. </p>`
        
    }

    if(TEM.value >=35.5 && TEM.value <= 37.4){
    
        res4.innerHTML = `<p> <strong> Temperatura - </strong> A sua temperatura está dentro dos valores normais. Caso esteja sentindo desconforto ou calafrios é importânte fazer a verificação da temperatura a cada 4 horas ou se o desconforto aumentar. Caso o desconforto persista por mais de um dia recomendamos ir ao pronto socorro mais próximo. </p>`
        
    }

    if(TEM.value >= 37.5 && TEM.value <= 39.4){

        res4.innerHTML = `<p> <strong> Temperatura - </strong> A sua temperatura está acima dos valores normais e pode trazer ríscos a saúde caso sua febre persiste há mais de um dia ou mesmo ao uso de anti térmicos como dipirona e paracetamol recomendamos ir ao pronto socorro mais próximo. É importânte fazer a verificação da temperatura a cada 4 horas. </p>`
    }

    if(TEM.value >= 39.5){

        res4.innerHTML = `<p> <strong> Temperatura - </strong> A sua temperatura está <strong> MUITO </strong> acima dos valores normais e pode trazer ríscos a saúde, recomendamos ir ao pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </p>`
    }

}


if(Saturação(SAT.value)){

    res3.innerHTML = ''

    if(SAT.value >= 95 && SAT.value <= 100){
        res3.innerHTML =  `<p> <strong> Saturação - </strong> A sua saturação está dentro dos padrões recomendados. </p>`
    }

    if(SAT.value <= 94){
        res3.innerHTML =  `<p> <strong> Saturação - </strong> A sua saturação está abaixo dos padrões normais, recomendamos se encaminhar para o pronto socorro mais próximo. </p>`
    }

    if(SAT.value < 90){
        res3.innerHTML =  `<p> <strong> Saturação - </strong> A sua saturação está abaixo dos padrões recomendados e pode trazer ríscos a sua saúde, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p>`
    }
}

if(PAsistolica(PA1.value) || PAdiastolica(PA2.value)){
  window.alert('Preencha todos os campos para triagem completa')
res1.innerHTML = ''
res.innerHTML = ''
}

else{

    // Valores de pressão sistólica

    if (PA1.value <= 90 && PA1.value >= 81) {
        res.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão sistólica (maior) abaixo dos padrões normais, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p>`
    }

    if (PA1.value <= 80) {
        res.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão sistólica (maior) <strong> MUITO </strong> abaixo dos padrões normais, e pode trazer ríscos a sua saúde, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação, ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p>`
    }

    
    if (PA1.value >= 91 && PA1.value <= 100 ) {
        res.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão sistólica (maior) pouco abaixo dos padrões normais, talves precise se alimentar ou se hidratar. Recomendamos ir ao pronto socorro mais próximo. </p>`
    }

    if (PA1.value >= 101 && PA1.value <= 138 ) {
        res.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão sistólica (maior) dentro dos padrões normais.</p>`
    }

    if (PA1.value >= 139 && PA1.value <= 159 ) {
        res.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão sistólica (maior) acima dos padrões normais, caso haver sintomas (dores de cabeça, náuseas, vertigem) recomendamos se encaminhar para o pronto socorro mais próximo. </p>`
    }

    if (PA1.value >= 160 && PA1.value <=175 ) {
        res.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão sistólica (maior) acima dos padrões normais, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p>`
    }

    if (PA1.value >= 176 && PA1.value ) {
        res.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão sistólica (maior) <strong> MUITO </strong> acima dos padrões normais, e pode trazer ríscos a sua saúde, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 </strong> (SAMU). </p>`
    }

    // A partir daqui valores de pressão diastólica

    if (PA2.value  <= 45 && PA1 <= 95 ) {
        res1.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão diastólica (menor) abaixo dos padrões normais, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p>`}

     if (PA2.value  <= 40 & PA2 >= 1 && PA1 <= 100 && PA1 ) {
        res1.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão diastólica (menor) abaixo dos padrões normais, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p>`}

    if (PA2.value <= 60 && PA2.value >= 41 && PA1 <= 90) {
        res1.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão diastólica (menor) pouco abaixo dos padrões normais de pressão diastólica. Caso haver sintomas (dores de cabeça, náuseas, vertigem, fraqueza) recomendamos se encaminhar para o pronto socorro mais próximo. </p>`}

    if (PA2.value <= 90 && PA2.value >= 50) {
        res1.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão diastólica (menor) dentro dos padrões normais.</p>`}   

    if (PA2.value < 49 && PA2.value > 36 && PA1.value <= 90) {
        res1.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão diastólica (menor) pouco abaixo dos padrões normais, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p>`}
    
    if (PA2.value < 35 ) {
        res1.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão diastólica (menor) <strong> MUITO </strong> abaixo dos padrões normais, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p>`}

    if (PA2.value >= 91 ) { 
        res1.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão diastólica (menor) acima dos padrões normais.</p>`}
    
    if (PA2.value >= 130 ) {
        res1.innerHTML = `<p> <strong> Pressão - </strong> Valor de pressão diastólica (menor) <strong> MUITO </strong> acima dos padrões normais, recomendamos se encaminhar para o pronto socorro mais próximo. Caso esteja impossibilitado de tomar alguma ação ou paciente está inconsciente ligue para <strong> 192 (SAMU). </strong> </p> `}

    //  Condições referentes aos batimentos cardíacos

}
}

function PAsistolica(PAS)
{
    if(Number(PAS) == 0){
    return true}
    else{
    return false
    }
}

function PAdiastolica(PAD)
{
    if(Number(PAD) == 0){
    return true}
    else{
    return false
    }
}

function Frecardiaca(F){
    if(Number(F)!= 0){
    return true}
    else
    {return false}

}

function Saturação(SAT){
    if(Number(SAT)!= 0){
        return true}

    else {return false}
    
}

function Temperatura(TEMP){
    if(Number(TEMP) != 0){
        return true
    }

}

