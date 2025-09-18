// Matrix Rain Effect for Portfolio Website
// Creates the falling green characters background effect

class MatrixRain {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.fontSize = 16;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = [];
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        this.setupDrops();
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.setupDrops();
        });
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
    }
    
    setupDrops() {
        this.drops = [];
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = 1;
        }
    }
    
    animate() {
        // Semi-transparent black background
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Matrix green text
        this.ctx.fillStyle = '#0f0';
        this.ctx.font = `${this.fontSize}px 'Fira Code', monospace`;
        
        for (let i = 0; i < this.drops.length; i++) {
            // Random characters (mix of letters, numbers, and katakana)
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            // Reset drop randomly
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            
            this.drops[i]++;
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize matrix effect when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const matrixCanvas = document.getElementById('matrix');
    if (matrixCanvas) {
        new MatrixRain('matrix');
    }
});