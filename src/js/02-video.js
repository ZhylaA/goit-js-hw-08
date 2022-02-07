// В HTML есть < iframe > с видео для Vimeo плеера. 
// Напиши скрипт который будет сохранять текущее время воспроизведения видео в
// локальное хранилище и, при перезагрузке страницы,
//     продолжать воспроизводить видео с этого времени.

// Пусть ключом для хранилища будет строка "videoplayer-current-time".

import throttle from 'lodash.throttle';
// Добавь библиотеку как зависимость проекта через npm.
import Player from '@vimeo/player';
import { join } from 'lodash';
// Инициализируй плеер в файле скрипта как это описано в секции pre - existing player, но учти что у тебя плеер
//   добавлен как npm пакет, а не через CDN.

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
// Сохраняй время воспроизведения в локальное хранилище. 
const onPlay = function (data) { localStorage.setItem('videoplayer-current-time', JSON.stringify(data)) };
// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду. */}
player.on('timeupdate', throttle(onPlay, 1000));
// Разбери документацию метода on() и начни отслеживать
//  событие timeupdate - обновление времени воспроизведения.
const saveTime = localStorage.getItem('videoplayer-current-time');
const saveTimeParse = JSON.parse(saveTime);
const time = saveTimeParse.seconds;
// При перезагрузке страницы воспользуйся 
// методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
if (time <= 571.563) {
    player.setCurrentTime(time).then(function (seconds) { }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
} else { localStorage.removeItem('videoplayer-current-time') };