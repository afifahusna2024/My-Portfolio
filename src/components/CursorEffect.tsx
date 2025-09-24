import React, { useEffect, useRef, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  color: string;
}

const CursorEffect: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const starsRef = useRef<Star[]>([]);

  // Initialize stars
  useEffect(() => {
    const initialStars: Star[] = [];
    for (let i = 0; i < 30; i++) {
      initialStars.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
        color: ['#8B5CF6', '#6366F1', '#A855F7', '#EC4899', '#F59E0B'][Math.floor(Math.random() * 5)]
      });
    }
    setStars(initialStars);
    starsRef.current = initialStars;
  }, []);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setStars(prevStars => {
        return prevStars.map(star => {
          // Calculate distance from mouse
          const dx = mousePosition.x - star.x;
          const dy = mousePosition.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Create attraction effect
          const attractionStrength = Math.max(0, 100 - distance) / 100;
          const attractionForce = attractionStrength * 0.02;
          
          // Update position with attraction
          const newX = star.x + (dx * attractionForce) + (Math.random() - 0.5) * star.speed;
          const newY = star.y + (dy * attractionForce) + (Math.random() - 0.5) * star.speed;
          
          // Keep stars within bounds
          const boundedX = Math.max(0, Math.min(window.innerWidth, newX));
          const boundedY = Math.max(0, Math.min(window.innerHeight, newY));
          
          // Update opacity based on distance from mouse
          const newOpacity = Math.min(1, star.opacity + attractionStrength * 0.3);
          
          return {
            ...star,
            x: boundedX,
            y: boundedY,
            opacity: newOpacity
          };
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Enhanced glowing cursor trail */}
      <div 
        className="absolute w-12 h-12 rounded-full blur-sm opacity-80 transition-all duration-100"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.9) 0%, rgba(99, 102, 241, 0.6) 30%, rgba(168, 85, 247, 0.4) 60%, transparent 100%)',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(99, 102, 241, 0.6), 0 0 90px rgba(168, 85, 247, 0.4)'
        }}
      />
      
      {/* Animated stars */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full transition-all duration-200"
          style={{
            left: star.x - star.size / 2,
            top: star.y - star.size / 2,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 3}px ${star.color}, 0 0 ${star.size * 6}px ${star.color}`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
      
      {/* Enhanced sparkle effects */}
      <div 
        className="absolute w-3 h-3 rounded-full opacity-90 animate-ping"
        style={{
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          background: 'radial-gradient(circle, #FBBF24 0%, #F59E0B 100%)',
          boxShadow: '0 0 15px #FBBF24, 0 0 25px #F59E0B'
        }}
      />
      
      {/* Additional glow ring */}
      <div 
        className="absolute w-16 h-16 rounded-full opacity-40 animate-pulse"
        style={{
          left: mousePosition.x - 32,
          top: mousePosition.y - 32,
          border: '2px solid rgba(139, 92, 246, 0.6)',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), inset 0 0 20px rgba(139, 92, 246, 0.2)'
        }}
      />
    </div>
  );
};

export default CursorEffect;
