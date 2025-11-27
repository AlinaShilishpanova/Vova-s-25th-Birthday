// Функция для инициализации карты
function initMap() {
    // Координаты из обновленной ссылки: 60.033510, 30.366998
    const map = new ymaps.Map('map-container', {
        center: [60.033510, 30.366998],
        zoom: 16
    });

    // Добавляем метку на карту
    const placemark = new ymaps.Placemark([60.033510, 30.366998], {
        hintContent: 'Родео Драйв - Торгово-развлекательный центр'
    }, {
        preset: 'islands#redDotIcon',
        iconColor: '#ff0000'
    });

    map.geoObjects.add(placemark);

    // Настраиваем элементы управления
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
    
    // Оставляем только контроль масштаба
    map.controls.add('zoomControl', {
        size: 'small',
        float: 'none',
        position: {
            top: '10px',
            right: '10px'
        }
    });
}

// Инициализируем карту после загрузки API
ymaps.ready(initMap);