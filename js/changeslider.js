let slider_container = document.querySelector('.itc-slider')

let consultations = document.querySelector('.consultations')

let group_classes = document.querySelector('.group_classes')

let family_therapy = document.querySelector('.family_therapy')

let bootcamp = document.querySelector('.bootcamp')

let lectures = document.querySelector('.lectures')

consultations.onclick = function (e) {
    slider_container.
    slider_container.innerHTML = for_consultations;
    ItcSlider.getOrCreateInstance('.slider-container');
}

group_classes.onclick = function (e) {
    slider_container.innerHTML = for_group_classes;
    ItcSlider.getOrCreateInstance('.slider-container');
}

family_therapy.onclick = function (e) {
    slider_container.innerHTML = for_family_therapy;
    ItcSlider.getOrCreateInstance('.slider-container');
}

bootcamp.onclick = function (e) {
    slider_container.innerHTML = for_bootcamp;
    ItcSlider.getOrCreateInstance('.slider-container');
}

lectures.onclick = function (e) {
    slider_container.innerHTML = for_lectures;
    ItcSlider.getOrCreateInstance('.slider-container');
}


let for_consultations = `
<div class="itc-slider" data-slider="itc-slider" data-swipe="true" data-loop="true" id="slider">
<div class="itc-slider-wrapper">
<div class="itc-slider-items">
<div class="itc-slider-item" id="consultations">
<div class="productslider_block">
    <h2 class="slider_title_product">Индивидуальные сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/consultations.JPG" alt="Индивидуальные сеансы" class="product_img">
        <div class="product_text">
            <span>Индивидуальный сеанс – на нём присутствуете только Вы и Психолог.<br>
                Продолжительность сеанса – 60 минут.<br>
                Количество встреч определяется индивидуально, с учетом запроса клиента.<br>
                <!-- Стоимость – 5 000,00 руб./сеанс.<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="group_classes">
<div class="productslider_block">
    <h2 class="slider_title_product">Групповые сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/group_classes.jpg" alt="Групповые сеансы" class="product_img">
        <div class="product_text">
            <span>На групповом сеансе присутствуете Вы, психолог и другие члены группы.<br>
                Общее количество участников (включая психолога) – 12 человек.<br>
                Продолжительность сеанса – 90 минут.<br>
                Количество встреч фиксировано – всего в курсе групповых сеансов 14 встреч<br>
                Перед включением в группу необходимо пройти собеседование, для включения в её
                состав (все группы формируются с учетом определенной тематики запросов, возраста
                и пола)<br>
                <!-- Стоимость – 2 500 руб./сеанс.<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="family_therapy">
<div class="productslider_block">
    <h2 class="slider_title_product">Семейные сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/family_therapy.JPG" alt="Семейные сеансы" class="product_img">
        <div class="product_text">
            <span>Семья – это система, которую составляют минимум два человека. Однако для того,
                чтобы стать клиентом данного вида сеансов, вам необязательно иметь семью в
                классическом понимании этого слова (зарегистрированный брак, дети и т.д.). Этот
                вид сеансов для Вас, если у Вас есть партнер, с которым Вы хотите сделать
                отношения ярче и богаче, либо решить насущные проблемы (конфликты, отсутствие
                влечения и т.д.).<br>
                Общее количество участников (без учета психолога) – от 2 человек. Возможно
                большее количество участников, если того требует структура семейной системы.<br>
                Продолжительность сеанса – 90 минут.<br>
                <!-- Стоимость – 6 000,00 руб./сеанс<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="bootcamp">
<div class="productslider_block">
    <h2 class="slider_title_product">Bootsession</h2>
    <div class="slider_product_container">
        <img src="img/products/bootcamp.png" alt="Bootsession сеанс" class="product_img">
        <div class="product_text">
            <span>Bootsession предполагает сочетание индивидуального и группового формата
                сеанса. Происходит чередование индивидуального и группового сеансов.<br>
                Bootsession – формат поделен на циклы. Один цикл – это один индивидуальный и
                один групповой сеансы.<br>
                Продолжительность сеанса – 60 минут при индивидуальной работе и 90 минут при
                групповой.<br>
                Количество циклов фиксировано – всего 20 циклов (10 индивидуальных и 10
                групповых сеансов).<br>
                Перед включением в bootsession сеанс необходимо пройти собеседование, для
                включения в состав (все группы формируются с учетом определенной тематики
                запросов, возраста и пола)<br>
                <!-- Стоимость – 3 500,00 руб./цикл<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="lectures">
<div class="productslider_block">
    <h2 class="slider_title_product">Открытые лекции</h2>
    <div class="slider_product_container">
        <img src="img/products/lectures.jpg" alt="Открытые лекции" class="product_img">
        <div class="product_text">
            <span>Я регулярно провожу открытые лекции по PersonaBuilding.<br>
                На лекциях я рассказываю о PersonaBuilding, рассказываю о том, как решить
                типичные проблемы, связанные с отношениями, уверенностью в себе и о много чем
                еще полезном и интересном.<br>
                Участие абсолютно бесплатно.<br>
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
</div>
                </div>
            
                <!-- Кнопки для перехода к предыдущему и следующему слайду -->
                <button class="itc-slider-btn itc-slider-btn-prev"></button>
                <button class="itc-slider-btn itc-slider-btn-next"></button>
                </div>
                `

let for_group_classes = `
<div class="itc-slider" data-slider="itc-slider" data-swipe="true" data-loop="true" id="slider">
<div class="itc-slider-wrapper">
<div class="itc-slider-items">
    <div class="itc-slider-item" id="group_classes">
<div class="productslider_block">
    <h2 class="slider_title_product">Групповые сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/group_classes.jpg" alt="Групповые сеансы" class="product_img">
        <div class="product_text">
            <span>На групповом сеансе присутствуете Вы, психолог и другие члены группы.<br>
                Общее количество участников (включая психолога) – 12 человек.<br>
                Продолжительность сеанса – 90 минут.<br>
                Количество встреч фиксировано – всего в курсе групповых сеансов 14 встреч<br>
                Перед включением в группу необходимо пройти собеседование, для включения в её
                состав (все группы формируются с учетом определенной тематики запросов, возраста
                и пола)<br>
                <!-- Стоимость – 2 500 руб./сеанс.<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="family_therapy">
<div class="productslider_block">
    <h2 class="slider_title_product">Семейные сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/family_therapy.JPG" alt="Семейные сеансы" class="product_img">
        <div class="product_text">
            <span>Семья – это система, которую составляют минимум два человека. Однако для того,
                чтобы стать клиентом данного вида сеансов, вам необязательно иметь семью в
                классическом понимании этого слова (зарегистрированный брак, дети и т.д.). Этот
                вид сеансов для Вас, если у Вас есть партнер, с которым Вы хотите сделать
                отношения ярче и богаче, либо решить насущные проблемы (конфликты, отсутствие
                влечения и т.д.).<br>
                Общее количество участников (без учета психолога) – от 2 человек. Возможно
                большее количество участников, если того требует структура семейной системы.<br>
                Продолжительность сеанса – 90 минут.<br>
                <!-- Стоимость – 6 000,00 руб./сеанс<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="bootcamp">
<div class="productslider_block">
    <h2 class="slider_title_product">Bootsession</h2>
    <div class="slider_product_container">
        <img src="img/products/bootcamp.png" alt="Bootsession сеанс" class="product_img">
        <div class="product_text">
            <span>Bootsession предполагает сочетание индивидуального и группового формата
                сеанса. Происходит чередование индивидуального и группового сеансов.<br>
                Bootsession – формат поделен на циклы. Один цикл – это один индивидуальный и
                один групповой сеансы.<br>
                Продолжительность сеанса – 60 минут при индивидуальной работе и 90 минут при
                групповой.<br>
                Количество циклов фиксировано – всего 20 циклов (10 индивидуальных и 10
                групповых сеансов).<br>
                Перед включением в bootsession сеанс необходимо пройти собеседование, для
                включения в состав (все группы формируются с учетом определенной тематики
                запросов, возраста и пола)<br>
                <!-- Стоимость – 3 500,00 руб./цикл<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="lectures">
<div class="productslider_block">
    <h2 class="slider_title_product">Открытые лекции</h2>
    <div class="slider_product_container">
        <img src="img/products/lectures.jpg" alt="Открытые лекции" class="product_img">
        <div class="product_text">
            <span>Я регулярно провожу открытые лекции по PersonaBuilding.<br>
                На лекциях я рассказываю о PersonaBuilding, рассказываю о том, как решить
                типичные проблемы, связанные с отношениями, уверенностью в себе и о много чем
                еще полезном и интересном.<br>
                Участие абсолютно бесплатно.<br>
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="consultations">
<div class="productslider_block">
    <h2 class="slider_title_product">Индивидуальные сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/consultations.JPG" alt="Индивидуальные сеансы" class="product_img">
        <div class="product_text">
            <span>Индивидуальный сеанс – на нём присутствуете только Вы и Психолог.<br>
                Продолжительность сеанса – 60 минут.<br>
                Количество встреч определяется индивидуально, с учетом запроса клиента.<br>
                <!-- Стоимость – 5 000,00 руб./сеанс.<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
                </span>
                </div>
            </div>
        </div>
        </div>
        </div>
                        </div>
                    
                        <!-- Кнопки для перехода к предыдущему и следующему слайду -->
                        <button class="itc-slider-btn itc-slider-btn-prev"></button>
                        <button class="itc-slider-btn itc-slider-btn-next"></button>
                        </div>`

let for_family_therapy = `<div class="itc-slider" data-slider="itc-slider" data-swipe="true" data-loop="true" id="slider">
<div class="itc-slider-wrapper">
    <div class="itc-slider-items">
<div class="itc-slider-item" id="family_therapy">
<div class="productslider_block">
    <h2 class="slider_title_product">Семейные сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/family_therapy.JPG" alt="Семейные сеансы" class="product_img">
        <div class="product_text">
            <span>Семья – это система, которую составляют минимум два человека. Однако для того,
                чтобы стать клиентом данного вида сеансов, вам необязательно иметь семью в
                классическом понимании этого слова (зарегистрированный брак, дети и т.д.). Этот
                вид сеансов для Вас, если у Вас есть партнер, с которым Вы хотите сделать
                отношения ярче и богаче, либо решить насущные проблемы (конфликты, отсутствие
                влечения и т.д.).<br>
                Общее количество участников (без учета психолога) – от 2 человек. Возможно
                большее количество участников, если того требует структура семейной системы.<br>
                Продолжительность сеанса – 90 минут.<br>
                <!-- Стоимость – 6 000,00 руб./сеанс<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="bootcamp">
<div class="productslider_block">
    <h2 class="slider_title_product">Bootsession</h2>
    <div class="slider_product_container">
        <img src="img/products/bootcamp.png" alt="Bootsession сеанс" class="product_img">
        <div class="product_text">
            <span>Bootsession предполагает сочетание индивидуального и группового формата
                сеанса. Происходит чередование индивидуального и группового сеансов.<br>
                Bootsession – формат поделен на циклы. Один цикл – это один индивидуальный и
                один групповой сеансы.<br>
                Продолжительность сеанса – 60 минут при индивидуальной работе и 90 минут при
                групповой.<br>
                Количество циклов фиксировано – всего 20 циклов (10 индивидуальных и 10
                групповых сеансов).<br>
                Перед включением в bootsession сеанс необходимо пройти собеседование, для
                включения в состав (все группы формируются с учетом определенной тематики
                запросов, возраста и пола)<br>
                <!-- Стоимость – 3 500,00 руб./цикл<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="lectures">
<div class="productslider_block">
    <h2 class="slider_title_product">Открытые лекции</h2>
    <div class="slider_product_container">
        <img src="img/products/lectures.jpg" alt="Открытые лекции" class="product_img">
        <div class="product_text">
            <span>Я регулярно провожу открытые лекции по PersonaBuilding.<br>
                На лекциях я рассказываю о PersonaBuilding, рассказываю о том, как решить
                типичные проблемы, связанные с отношениями, уверенностью в себе и о много чем
                еще полезном и интересном.<br>
                Участие абсолютно бесплатно.<br>
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="consultations">
<div class="productslider_block">
    <h2 class="slider_title_product">Индивидуальные сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/consultations.JPG" alt="Индивидуальные сеансы" class="product_img">
        <div class="product_text">
            <span>Индивидуальный сеанс – на нём присутствуете только Вы и Психолог.<br>
                Продолжительность сеанса – 60 минут.<br>
                Количество встреч определяется индивидуально, с учетом запроса клиента.<br>
                <!-- Стоимость – 5 000,00 руб./сеанс.<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="group_classes">
<div class="productslider_block">
    <h2 class="slider_title_product">Групповые сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/group_classes.jpg" alt="Групповые сеансы" class="product_img">
        <div class="product_text">
            <span>На групповом сеансе присутствуете Вы, психолог и другие члены группы.<br>
                Общее количество участников (включая психолога) – 12 человек.<br>
                Продолжительность сеанса – 90 минут.<br>
                Количество встреч фиксировано – всего в курсе групповых сеансов 14 встреч<br>
                Перед включением в группу необходимо пройти собеседование, для включения в её
                состав (все группы формируются с учетом определенной тематики запросов, возраста
                и пола)<br>
                <!-- Стоимость – 2 500 руб./сеанс.<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
                </span>
                </div>
            </div>
        </div>
        </div>
        </div>
                        </div>
                    
                        <!-- Кнопки для перехода к предыдущему и следующему слайду -->
                        <button class="itc-slider-btn itc-slider-btn-prev"></button>
                        <button class="itc-slider-btn itc-slider-btn-next"></button>
                        </div>`

let for_bootcamp = `<div class="itc-slider" data-slider="itc-slider" data-swipe="true" data-loop="true" id="slider">
<div class="itc-slider-wrapper">
    <div class="itc-slider-items">
<div class="itc-slider-item" id="bootcamp">
<div class="productslider_block">
    <h2 class="slider_title_product">Bootsession</h2>
    <div class="slider_product_container">
        <img src="img/products/bootcamp.png" alt="Bootsession сеанс" class="product_img">
        <div class="product_text">
            <span>Bootsession предполагает сочетание индивидуального и группового формата
                сеанса. Происходит чередование индивидуального и группового сеансов.<br>
                Bootsession – формат поделен на циклы. Один цикл – это один индивидуальный и
                один групповой сеансы.<br>
                Продолжительность сеанса – 60 минут при индивидуальной работе и 90 минут при
                групповой.<br>
                Количество циклов фиксировано – всего 20 циклов (10 индивидуальных и 10
                групповых сеансов).<br>
                Перед включением в bootsession сеанс необходимо пройти собеседование, для
                включения в состав (все группы формируются с учетом определенной тематики
                запросов, возраста и пола)<br>
                <!-- Стоимость – 3 500,00 руб./цикл<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="lectures">
<div class="productslider_block">
    <h2 class="slider_title_product">Открытые лекции</h2>
    <div class="slider_product_container">
        <img src="img/products/lectures.jpg" alt="Открытые лекции" class="product_img">
        <div class="product_text">
            <span>Я регулярно провожу открытые лекции по PersonaBuilding.<br>
                На лекциях я рассказываю о PersonaBuilding, рассказываю о том, как решить
                типичные проблемы, связанные с отношениями, уверенностью в себе и о много чем
                еще полезном и интересном.<br>
                Участие абсолютно бесплатно.<br>
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="consultations">
<div class="productslider_block">
    <h2 class="slider_title_product">Индивидуальные сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/consultations.JPG" alt="Индивидуальные сеансы" class="product_img">
        <div class="product_text">
            <span>Индивидуальный сеанс – на нём присутствуете только Вы и Психолог.<br>
                Продолжительность сеанса – 60 минут.<br>
                Количество встреч определяется индивидуально, с учетом запроса клиента.<br>
                <!-- Стоимость – 5 000,00 руб./сеанс.<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="group_classes">
<div class="productslider_block">
    <h2 class="slider_title_product">Групповые сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/group_classes.jpg" alt="Групповые сеансы" class="product_img">
        <div class="product_text">
            <span>На групповом сеансе присутствуете Вы, психолог и другие члены группы.<br>
                Общее количество участников (включая психолога) – 12 человек.<br>
                Продолжительность сеанса – 90 минут.<br>
                Количество встреч фиксировано – всего в курсе групповых сеансов 14 встреч<br>
                Перед включением в группу необходимо пройти собеседование, для включения в её
                состав (все группы формируются с учетом определенной тематики запросов, возраста
                и пола)<br>
                <!-- Стоимость – 2 500 руб./сеанс.<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="family_therapy">
<div class="productslider_block">
    <h2 class="slider_title_product">Семейные сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/family_therapy.JPG" alt="Семейные сеансы" class="product_img">
        <div class="product_text">
            <span>Семья – это система, которую составляют минимум два человека. Однако для того,
                чтобы стать клиентом данного вида сеансов, вам необязательно иметь семью в
                классическом понимании этого слова (зарегистрированный брак, дети и т.д.). Этот
                вид сеансов для Вас, если у Вас есть партнер, с которым Вы хотите сделать
                отношения ярче и богаче, либо решить насущные проблемы (конфликты, отсутствие
                влечения и т.д.).<br>
                Общее количество участников (без учета психолога) – от 2 человек. Возможно
                большее количество участников, если того требует структура семейной системы.<br>
                Продолжительность сеанса – 90 минут.<br>
                <!-- Стоимость – 6 000,00 руб./сеанс<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
                </span>
                </div>
            </div>
        </div>
        </div>
        </div>
                        </div>
                    
                        <!-- Кнопки для перехода к предыдущему и следующему слайду -->
                        <button class="itc-slider-btn itc-slider-btn-prev"></button>
                        <button class="itc-slider-btn itc-slider-btn-next"></button>
                        </div>`

let for_lectures = `<div class="itc-slider" data-slider="itc-slider" data-swipe="true" data-loop="true" id="slider">
<div class="itc-slider-wrapper">
    <div class="itc-slider-items">
    <div class="itc-slider-item" id="lectures">
<div class="productslider_block">
    <h2 class="slider_title_product">Открытые лекции</h2>
    <div class="slider_product_container">
        <img src="img/products/lectures.jpg" alt="Открытые лекции" class="product_img">
        <div class="product_text">
            <span>Я регулярно провожу открытые лекции по PersonaBuilding.<br>
                На лекциях я рассказываю о PersonaBuilding, рассказываю о том, как решить
                типичные проблемы, связанные с отношениями, уверенностью в себе и о много чем
                еще полезном и интересном.<br>
                Участие абсолютно бесплатно.<br>
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="consultations">
<div class="productslider_block">
    <h2 class="slider_title_product">Индивидуальные сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/consultations.JPG" alt="Индивидуальные сеансы" class="product_img">
        <div class="product_text">
            <span>Индивидуальный сеанс – на нём присутствуете только Вы и Психолог.<br>
                Продолжительность сеанса – 60 минут.<br>
                Количество встреч определяется индивидуально, с учетом запроса клиента.<br>
                <!-- Стоимость – 5 000,00 руб./сеанс.<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="group_classes">
<div class="productslider_block">
    <h2 class="slider_title_product">Групповые сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/group_classes.jpg" alt="Групповые сеансы" class="product_img">
        <div class="product_text">
            <span>На групповом сеансе присутствуете Вы, психолог и другие члены группы.<br>
                Общее количество участников (включая психолога) – 12 человек.<br>
                Продолжительность сеанса – 90 минут.<br>
                Количество встреч фиксировано – всего в курсе групповых сеансов 14 встреч<br>
                Перед включением в группу необходимо пройти собеседование, для включения в её
                состав (все группы формируются с учетом определенной тематики запросов, возраста
                и пола)<br>
                <!-- Стоимость – 2 500 руб./сеанс.<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="family_therapy">
<div class="productslider_block">
    <h2 class="slider_title_product">Семейные сеансы</h2>
    <div class="slider_product_container">
        <img src="img/products/family_therapy.JPG" alt="Семейные сеансы" class="product_img">
        <div class="product_text">
            <span>Семья – это система, которую составляют минимум два человека. Однако для того,
                чтобы стать клиентом данного вида сеансов, вам необязательно иметь семью в
                классическом понимании этого слова (зарегистрированный брак, дети и т.д.). Этот
                вид сеансов для Вас, если у Вас есть партнер, с которым Вы хотите сделать
                отношения ярче и богаче, либо решить насущные проблемы (конфликты, отсутствие
                влечения и т.д.).<br>
                Общее количество участников (без учета психолога) – от 2 человек. Возможно
                большее количество участников, если того требует структура семейной системы.<br>
                Продолжительность сеанса – 90 минут.<br>
                <!-- Стоимость – 6 000,00 руб./сеанс<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
            </span>
        </div>
    </div>
</div>
</div>
<div class="itc-slider-item" id="bootcamp">
<div class="productslider_block">
    <h2 class="slider_title_product">Bootsession</h2>
    <div class="slider_product_container">
        <img src="img/products/bootcamp.png" alt="Bootsession сеанс" class="product_img">
        <div class="product_text">
            <span>Bootsession предполагает сочетание индивидуального и группового формата
                сеанса. Происходит чередование индивидуального и группового сеансов.<br>
                Bootsession – формат поделен на циклы. Один цикл – это один индивидуальный и
                один групповой сеансы.<br>
                Продолжительность сеанса – 60 минут при индивидуальной работе и 90 минут при
                групповой.<br>
                Количество циклов фиксировано – всего 20 циклов (10 индивидуальных и 10
                групповых сеансов).<br>
                Перед включением в bootsession сеанс необходимо пройти собеседование, для
                включения в состав (все группы формируются с учетом определенной тематики
                запросов, возраста и пола)<br>
                <!-- Стоимость – 3 500,00 руб./цикл<br> -->
                <div class="space"> </div>
                <button><a href="#registration">Для записи нажмите сюда</a></button>
                </span>
                </div>
            </div>
        </div>
        </div>
        </div>
                        </div>
                    
                        <!-- Кнопки для перехода к предыдущему и следующему слайду -->
                        <button class="itc-slider-btn itc-slider-btn-prev"></button>
                        <button class="itc-slider-btn itc-slider-btn-next"></button>
                        </div>`
