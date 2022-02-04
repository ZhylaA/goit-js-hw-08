
// Напиши скрипт который будет сохранять значения полей 
// в локальное хранилище когда пользователь что - то печатает.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>
// Отслеживай на форме событие input,
//     и каждый раз записывай в локальное хранилище объект
//     с полями email и message, в которых сохраняй текущие значения полей формы.
//     Пусть ключом для хранилища будет строка "feedback-form-state".
//     При загрузке страницы проверяй состояние хранилища,
//     и если там есть сохраненные данные, заполняй ими поля формы.
//     В противном случае поля должны быть пустыми.
//     При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email,
//     message и текущими их значениями в консоль.
//     Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
//     Для этого добавь в проект и используй библиотеку lodash.throttle.
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
    feedbackFormInput:document.querySelector('.feedback-form input'),
    feedbackFormTextarea:document.querySelector('.feedback-form textarea'),}
refs.feedbackFormInput.addEventListener('input', throttle(onFeedbackFormState, 500));
refs.feedbackFormTextarea.addEventListener('input', throttle(onFeedbackFormState, 500));
refs.feedbackForm.addEventListener('submit', onFormSubmit);
populateTextarea();
populateTextInput();
function onFeedbackFormState(evn) {
    const textSave = evn.currentTarget.value;
    console.log(textSave);
    localStorage.setItem(STORAGE_KEY, textSave);
}
function onFormSubmit(evn) {
    evn.preventDefault();
    evn.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}
function populateTextarea() {
    const savedTextTextarea = localStorage.getItem(STORAGE_KEY);
    if (savedTextTextarea) { refs.feedbackFormTextarea.value = savedTextTextarea };
};
function populateTextInput() {
    const savedTextInput = localStorage.getItem(STORAGE_KEY);
        if (savedTextInput) {
        // console.log(savedTextInput);
        refs.feedbackFormInput.value = savedTextInput;
    };
};

// console.log(feedbackFormInput);
// При сабмите формы очищай хранилище и поля формы