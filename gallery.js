// Datos de la galería (podrían cargarse desde una API)
const galleryItems = [
    {
        src: 'images/gallery/documento1.jpg',
        category: 'documentos',
        caption: 'Instituto Científico y Literario, 1929',
        description: 'Documento histórico que muestra registros de cuando Mirlo impartía matemáticas.'
    },
    {
        src: 'images/gallery/manuscrito1.jpg',
        category: 'poemas',
        caption: 'Borrador de "El Peregrino"',
        description: 'Manuscrito original con correcciones del poeta.'
    },
    // Más items...
];

document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-container');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Cargar galería inicial
    renderGallery('all');
    
    // Filtrado por categoría
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover active de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir active al botón clickeado
            this.classList.add('active');
            
            // Filtrar galería
            const category = this.getAttribute('data-category');
            renderGallery(category);
        });
    });
    
    // Función para renderizar la galería
    function renderGallery(category) {
        galleryContainer.innerHTML = '';
        
        const itemsToShow = category === 'all' 
            ? galleryItems 
            : galleryItems.filter(item => item.category === category);
        
        itemsToShow.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-category', item.category);
            
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.caption}">
                <div class="gallery-caption">${item.caption}</div>
                <div class="gallery-description">${item.description}</div>
            `;
            
            galleryContainer.appendChild(galleryItem);
        });
    }
    
    // Navegación de galería
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            galleryContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            galleryContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});
