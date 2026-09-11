import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'gold', // 'gold' | 'outline' | 'link'
  to,
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  target,
  rel,
  ...props
}) {
  const baseClasses = "font-sans uppercase text-[11px] sm:text-xs tracking-nav transition-all duration-300 inline-flex items-center justify-center";
  
  let variantClasses = "";
  if (variant === 'gold') {
    variantClasses = "bg-gold hover:bg-gold-hover text-[#0A0D14] font-semibold px-6 py-3.5 rounded-sm shadow-md shadow-gold/10 hover:shadow-gold/20 hover:-translate-y-0.5 active:translate-y-0";
  } else if (variant === 'outline') {
    variantClasses = "border border-gold/60 hover:border-gold text-[#F1EEE6] hover:text-gold bg-transparent px-6 py-3.5 rounded-sm hover:bg-gold/5 transition-all hover:-translate-y-0.5";
  } else if (variant === 'link') {
    variantClasses = "text-gold hover:text-gold-light p-0 font-medium tracking-nav group inline-flex items-center gap-2 border-b border-gold/40 hover:border-gold pb-0.5";
  }

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`w-3.5 h-3.5 ${variant === 'link' ? 'transition-transform group-hover:-translate-x-0.5' : 'mr-2'}`} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className={`w-3.5 h-3.5 ${variant === 'link' ? 'transition-transform group-hover:translate-x-1' : 'ml-2'}`} />
      )}
    </>
  );

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
