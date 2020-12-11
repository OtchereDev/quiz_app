const form = document.querySelector('.form');
const total = document.querySelector('.total')
const correct_answers = ['A', 'B', 'B', 'A']
const score_box = document.querySelector('.score')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;

    const user_answers = [form.q1.value, form.q2.value,
        form.q3.value, form.q4.value
    ]


    for (let i = 0; i < correct_answers.length; i++) {
        if (user_answers[i] === correct_answers[i]) {
            score += 25
        }
    }

    scrollTo(0, 0)

    score_box.style.display = 'flex';

    anim_score = 0
    const scoreAnimation = setInterval(() => {
        if (anim_score < score) {
            anim_score++
            total.textContent = anim_score + ' %'
        } else {
            clearInterval(scoreAnimation)
        }
    }, 50);


})