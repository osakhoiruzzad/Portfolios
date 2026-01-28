document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactModal');
    const trigger = document.getElementById('contactTrigger');

    trigger.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function closeContact() {
    document.getElementById('contactModal').style.display = 'none';
}
