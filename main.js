document.addEventListener('DOMContentLoaded', function() {
    // Sistema de pestañas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Interacción con poemas
    const poemLines = document.querySelectorAll('.poem-line');
    const analysisResult = document.getElementById('line-analysis');
    
    // Datos de análisis (podrían cargarse desde una API)
    const lineAnalyses = {
        "Polvo fui del camino. Mas una Voz Perfecta": {
            ingenieria: "Metáfora del proceso iterativo en diseño ingenieril",
            ciencias: "Analogía con la teoría del caos y los atractores",
            humanidades: "Referencia intertextual a tradiciones místicas",
            arte: "Imagen visual del polvo como materia prima creativa"
        },
        // Más análisis para otros versos
    };
    
    poemLines.forEach(line => {
        line.addEventListener('click', () => {
            // Remover highlight de todas las líneas
            poemLines.forEach(l => l.classList.remove('highlight'));
            
            // Añadir highlight a la línea seleccionada
            line.classList.add('highlight');
            
            // Mostrar análisis
            const lineText = line.textContent.trim();
            if (lineAnalyses[lineText]) {
                let analysisHTML = '<h4>Interpretaciones multidisciplinares:</h4>';
                for (const discipline in lineAnalyses[lineText]) {
                    analysisHTML += `
                        <div class="discipline-analysis">
                            <strong>${discipline}:</strong>
                            <p>${lineAnalyses[lineText][discipline]}</p>
                        </div>
                    `;
                }
                analysisResult.innerHTML = analysisHTML;
            } else {
                analysisResult.innerHTML = '<p>Selecciona un verso para ver interpretaciones desde diferentes disciplinas.</p>';
            }
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('academic-contact');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación simple
            const name = document.getElementById('name').value;
            const institution = document.getElementById('institution').value;
            const discipline = document.getElementById('discipline').value;
            const message = document.getElementById('message').value;
            
            if (name && institution && discipline && message) {
                // Aquí iría la lógica para enviar el formulario (AJAX, etc.)
                alert('Gracias por tu interés. Tu propuesta de colaboración ha sido enviada.');
                contactForm.reset();
            } else {
                alert('Por favor completa todos los campos.');
            }
        });
    }
    
    // Efecto de desplazamiento suave para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
