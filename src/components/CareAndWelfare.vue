<template>
    <section class="rectangule">
        
        <div class="parrafo">
            <p>Conoce nuestros productos</p>
            <img class="flecha" src="/images/flecha"/>
        </div>  

        <div class="producto">
            <div class="image">
                <img src="/images/product2.png" alt="" />
            </div>
            <div class="info">
                <p class="nombre">Milagros</p>
            </div>
            <div class="tipo">
                <p>Shampoo</p>
            </div>
            <div class="precio">
                <p>$85.000</p>2
            </div>
        </div>

        <div class="producto">
            <div class="image">
                <img src="/images/product3.png" alt="" />
            </div>
            <div class="info">
                <p class="nombre">Recamier</p>
            </div>
            <div class="tipo">
                <p>Shampoo</p>
            </div>
            <div class="precio">
                <p>$32.500</p>
            </div>
        </div>

        <div class="producto">
            <div class="image">
                <img src="/images/product4.png" alt="" />
            </div>
            <div class="info">
                <p class="nombre">Sensitive</p>
            </div>
            <div class="tipo">
                <p>Gillette</p>
            </div>
            <div class="precio">
                <p>$99.500</p>
            </div>
        </div>

        <div class="producto">
            <div class="image">
                <img src="/images/product5.png" alt="" />
            </div>
            <div class="info">
                <p class="nombre">Soft Color</p>
            </div>
            <div class="tipo">
                <p>Wella</p>
            </div>
            <div class="precio">
                <p>$57.000</p>
            </div>
        </div>

    </section>
</template>

<style scope>
.rectangule {
    width: 400px;
    height: 1190px;
    flex-shrink: 0;
    border-radius: 15px;
    background: rgba(138, 147, 155, 0.25);
}

.parrafo {
    width: 246px;
    height: 82px;
    font-family: Nunito;
    font-size: 30px;
    font-weight: 700;
    line-height: 41px;
    letter-spacing: 0em;
    text-align: left;
    background: #FFFFFF;
}

.flecha {
    width: Fixed 48px;
    height: Fixed 48px;
    padding: 10px;
    border-radius: 41px;
    gap: 10px;
    background: #B48100;
    box-shadow: 0px 10px 19px 0px #0000000D;
}

.producto {
    width: Hug (338.33px);
    height: Hug (190px);
    gap: 24px;
    margin-right: 10px;
    display: grid;
    border-bottom: 1px solid #B48100
}

.image {
    width: 127.33px;
    height: 190px;
    border-radius: 12px
}

.info {
    width: Hug (187px);
    height: Hug (90px);
    gap: 12px
}

.nombre {
    width: 187px;
    height: 22px;
    font-family: Nunito;
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    background: #FFFFFF;
}

.tipo {
    width: 136px;
    height: 22px;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    background: #F5F7F9;
}

.precio {
    width: 136px;
    height: 22px;
    font-family: Nunito;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    background: #F5F7F9;
}

</style>