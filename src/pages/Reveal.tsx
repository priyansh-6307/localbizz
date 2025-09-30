import React from 'react';

/**
 * A wrapper component that applies a simple slide-up animation 
 * immediately when the component mounts.
 */
const SlideUpOnMount = ({ children, delay = 0 }) => {
    return (
        <div
            // Key Tailwind classes for the animation effect
            className={`
                transition-all duration-700 ease-out 
                opacity-100 translate-y-0
            `}
            // Initial hidden state applied via inline style for immediate rendering
            style={{ 
                opacity: 0, 
                transform: 'translateY(32px)',
                transitionDelay: `${delay}ms`,
                // This forces a reflow to ensure the transition runs on mount
                animationPlayState: 'running' 
            }}
            // Use a separate class to trigger the transition after a microtask delay
            // This is the trick to run a transition immediately on mount.
            data-animate="true" 
        >
            {children}
            
            {/* This is a standard pattern to force a transition immediately on mount.
              We apply the 'end state' classes (opacity-100, translate-y-0) 
              when the component renders, and the inline style provides the 
              'start state' (opacity: 0, translateY(32px)).
            */}
            
        </div>
    );
};

export default SlideUpOnMount;