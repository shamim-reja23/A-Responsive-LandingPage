function toggleStep(stepNumber) {
    const steps = document.querySelectorAll('.step-text');
    const icons = document.querySelectorAll('.plus-icon');
    const headings = document.querySelectorAll('.step-title');

    steps.forEach((step, index) => {
        const icon = icons[index];
        const heading = headings[index];
        
        if (index + 1 === stepNumber) {
            // Toggle the display of the selected step text
            const isVisible = step.style.display === 'block';
            step.style.display = isVisible ? 'none' : 'block';
            // Change icon to '+' or '×'
            icon.textContent = isVisible ? '+' : '×';
            // Add or remove the 'active' class on heading
            heading.classList.toggle('active', !isVisible);
        } else {
            // Hide other step text, reset icon to '+', and remove 'active' class
            step.style.display = 'none';
            icon.textContent = '+';
            heading.classList.remove('active');
        }
    });
}


function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');
    const isVisible = answer.style.display === 'block';

    // Close all answers and remove active class from all questions
    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
    document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

    // Toggle the clicked question's answer
    if (!isVisible) {
        answer.style.display = 'block';
        element.classList.add('active');
        arrow.classList.add('down');
    } else {
        arrow.classList.remove('down');
    }
}
