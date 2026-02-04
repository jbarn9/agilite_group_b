export const initModal = () => {
    const modalHtml = `
        <div id="generic-modal" class="modal-backdrop" style="display:none">
            <div class="modal-content">
                <div id="form-container"></div>
                <button id="close-modal">Fermer</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    document.querySelector('#close-modal').onclick = () => {
        document.querySelector('#generic-modal').style.display = 'none';
    };
};