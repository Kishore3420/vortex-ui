'use client';

import {
  BookOpen,
  ChevronDown,
  ChevronsLeft,
  Circle,
  FileImage,
  Layers,
  List,
  MousePointer,
  Search,
  Settings,
  Type,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

// ============================================================================
// Types & Interfaces
// ============================================================================

interface SidebarItem {
  href: string;
  label: string;
}

interface SidebarSection {
  label: string;
  icon: ReactNode;
  items: SidebarItem[];
}

interface DocsSidebarProps {
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

// ============================================================================
// Constants
// ============================================================================

const SIDEBAR_WIDTH_EXPANDED = 'w-64';
const SIDEBAR_WIDTH_COLLAPSED = 'w-20';
const SEARCH_DEBOUNCE_MS = 150;

const sections: SidebarSection[] = [
  {
    label: 'Getting Started',
    icon: <Zap className="w-4 h-4" />,
    items: [
      { href: '/docs', label: 'Introduction' },
      { href: '/docs/getting-started', label: 'Getting Started' },
      { href: '/docs/quick-start', label: 'Quick Start' },
    ],
  },
  {
    label: 'Basic Animations',
    icon: <Layers className="w-4 h-4" />,
    items: [
      { href: '/docs/animations/fade-in', label: 'Fade In' },
      { href: '/docs/animations/scale-in', label: 'Scale In' },
      { href: '/docs/animations/rotate-in', label: 'Rotate In' },
      { href: '/docs/animations/blur-in', label: 'Blur In' },
      { href: '/docs/animations/flip-in', label: 'Flip In' },
      { href: '/docs/animations/slide-up-text', label: 'Slide Up Text' },
    ],
  },
  {
    label: 'Stagger & Sequencing',
    icon: <List className="w-4 h-4" />,
    items: [
      { href: '/docs/animations/stagger', label: 'Stagger Container' },
      { href: '/docs/animations/stagger-item', label: 'Stagger Item' },
      { href: '/docs/animations/diagonal-stagger', label: 'Diagonal Stagger' },
    ],
  },
  {
    label: 'Text Animations',
    icon: <Type className="w-4 h-4" />,
    items: [
      { href: '/docs/text', label: 'Overview' },
      { href: '/docs/text/text-reveal', label: 'Text Reveal' },
      { href: '/docs/text/character-reveal', label: 'Character Reveal' },
      { href: '/docs/text/typewriter', label: 'Typewriter' },
      { href: '/docs/text/blur-reveal', label: 'Blur Reveal' },
      { href: '/docs/text/scramble-reveal', label: 'Scramble Reveal' },
      { href: '/docs/text/box-reveal', label: 'Box Reveal' },
      { href: '/docs/text/gradual-spacing', label: 'Gradual Spacing' },
      { href: '/docs/text/word-pull-up', label: 'Word Pull Up' },
      { href: '/docs/text/letter-pull-up', label: 'Letter Pull Up' },
      { href: '/docs/text/wavy-text', label: 'Wavy Text' },
      { href: '/docs/text/rotating-text', label: 'Rotating Text' },
      { href: '/docs/text/shimmer-text', label: 'Shimmer Text' },
      { href: '/docs/text/rolling-text', label: 'Rolling Text' },
      { href: '/docs/text/elastic-reveal', label: 'Elastic Reveal' },
      { href: '/docs/text/sparkle-reveal', label: 'Sparkle Reveal' },
      { href: '/docs/text/glitch-text', label: 'Glitch Text' },
      { href: '/docs/text/link-reveal', label: 'Link Reveal' },
      { href: '/docs/text/text-mask', label: 'Text Mask' },
    ],
  },
  {
    label: 'Background Effects',
    //
    icon: <FileImage className="w-4 h-4" />,
    items: [
      { href: '/docs/backgrounds', label: 'Overview' },
      { href: '/docs/backgrounds/aurora', label: 'Aurora' },
      { href: '/docs/backgrounds/grid-beams', label: 'Grid Beams' },
      { href: '/docs/backgrounds/mesh-gradient', label: 'Mesh Gradient' },
      { href: '/docs/backgrounds/shooting-stars', label: 'Shooting Stars' },
      { href: '/docs/backgrounds/spotlight', label: 'Spotlight' },
    ],
  },
  {
    label: 'Button Components',
    icon: <MousePointer className="w-4 h-4" />,
    items: [
      { href: '/docs/buttons', label: 'Overview' },
      { href: '/docs/buttons/shimmer-button', label: 'Shimmer Button' },
      { href: '/docs/buttons/border-beam', label: 'Border Beam Button' },
      { href: '/docs/buttons/ripple-button', label: 'Ripple Button' },
      { href: '/docs/buttons/magnetic-button', label: 'Magnetic Button' },
      { href: '/docs/buttons/glow-button', label: 'Glow Button' },
      { href: '/docs/buttons/interactive-3d', label: 'Interactive 3D Button' },
    ],
  },
  {
    label: 'Techniques',
    icon: <Settings className="w-4 h-4" />,
    items: [
      { href: '/docs/techniques/viewport-margins', label: 'Viewport Control' },
      { href: '/docs/techniques/easing', label: 'Easing Functions' },
      { href: '/docs/techniques/performance', label: 'Performance Tips' },
    ],
  },
  {
    label: 'Reference',
    icon: <BookOpen className="w-4 h-4" />,
    items: [
      { href: '/docs/roadmap', label: 'Roadmap' },
      { href: '/docs/examples', label: 'Examples' },
    ],
  },
];

// ============================================================================
// Utility Functions
// ============================================================================

const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

// ============================================================================
// Sub-Components
// ============================================================================

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, []);

  return (
    <div className="px-4 py-4 border-b border-border">
      <div className="relative group">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search components..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-9 pl-9 pr-4 text-sm bg-muted/50 border border-border rounded-lg outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all group-hover:bg-muted"
          aria-label="Search documentation"
        />
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
      </div>
    </div>
  );
};

interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggleCollapse?: () => void;
}

const SidebarHeader = ({ isCollapsed, onToggleCollapse }: SidebarHeaderProps) => {
  return (
    <div className="px-4 py-6 border-b border-border shrink-0 flex items-center justify-between">
      {!isCollapsed && (
        <Link
          href="/docs"
          className="block animate-in fade-in slide-in-from-left-4 duration-300"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            VortexUI
          </span>
          <p className="text-lg font-semibold">Docs</p>
        </Link>
      )}
      {isCollapsed && (
        <div className="w-full flex justify-center">
          <span className="text-xl font-bold text-primary">V</span>
        </div>
      )}
      <button
        onClick={onToggleCollapse}
        className="hidden md:flex items-center justify-center h-8 w-8 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
        title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        aria-expanded={!isCollapsed}
      >
        <ChevronsLeft className={cn('w-4 h-4 transition-transform', isCollapsed && 'rotate-180')} />
      </button>
    </div>
  );
};

interface NavItemProps {
  item: SidebarItem;
  isActive: boolean;
  onClose?: () => void;
}

const NavItem = ({ item, isActive, onClose }: NavItemProps) => {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onClose}
        className={cn(
          'flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-all outline-none focus-visible:ring-1 focus-visible:ring-primary',
          isActive
            ? 'bg-primary/10 text-primary font-medium'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
        )}
      >
        <Circle className={cn('w-1 h-1 fill-current transition-all', isActive ? 'scale-100' : 'scale-0 opacity-0')} />
        {item.label}
      </Link>
    </li>
  );
};

interface SectionProps {
  section: SidebarSection;
  isOpen: boolean;
  hasActiveItem: boolean;
  currentPath: string;
  onToggle: () => void;
  onCloseMobile?: () => void;
}

const Section = ({ section, isOpen, hasActiveItem, currentPath, onToggle, onCloseMobile }: SectionProps) => {
  return (
    <div className="space-y-1">
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between px-2 py-2 text-xs font-medium uppercase tracking-wide rounded-md transition-colors outline-none focus-visible:ring-1 focus-visible:ring-primary',
          hasActiveItem ? 'text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
        )}
        aria-expanded={isOpen}
        aria-controls={`section-${section.label}`}
      >
        <div className="flex items-center gap-2">
          {section.icon}
          <span>{section.label}</span>
        </div>
        <ChevronDown className={cn('w-4 h-4 transition-transform duration-200', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <ul
          id={`section-${section.label}`}
          className="space-y-0.5 mt-1 animate-in slide-in-from-top-2 duration-200"
          role="list"
        >
          {section.items.map((item) => (
            <NavItem
              key={item.href}
              item={item}
              isActive={currentPath === item.href}
              onClose={onCloseMobile}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

interface CollapsedSectionIconProps {
  section: SidebarSection;
  isActive: boolean;
  currentPath: string;
  onNavigate?: () => void;
}

const CollapsedSectionIcon = ({ section, isActive, currentPath, onNavigate }: CollapsedSectionIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isHovered && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top,
        left: rect.right + 8
      });
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleNavClick = () => {
    setIsHovered(false);
    onNavigate?.();
  };

  return (
    <>
      <div
        ref={buttonRef}
        className="relative flex justify-center py-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={cn(
            'p-2 rounded-md transition-all duration-200 cursor-pointer',
            isActive
              ? 'bg-primary/10 text-primary shadow-sm'
              : 'text-muted-foreground hover:bg-accent hover:text-foreground'
          )}
        >
          {section.icon}
        </div>
      </div>

      {isHovered && (
        <div
          className="fixed z-60 animate-in fade-in slide-in-from-left-2 duration-200 pointer-events-auto"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-card/95 border border-border rounded-lg shadow-xl py-2 min-w-50 backdrop-blur-md">
            <div className="px-4 py-2 border-b border-border bg-muted/30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                {section.label}
              </span>
            </div>
            <ul className="py-1 px-1 max-h-100 overflow-y-auto">
              {section.items.map((item) => {
                const active = currentPath === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className={cn(
                        'flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-all',
                        active
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                      )}
                    >
                      <Circle className={cn('w-1 h-1 fill-current', active ? 'opacity-100' : 'opacity-0')} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

// ============================================================================
// Main Component
// ============================================================================

export function DocsSidebar({
  isMobileOpen = false,
  onCloseMobile,
  isCollapsed = false,
  onToggleCollapse,
}: DocsSidebarProps) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, SEARCH_DEBOUNCE_MS);

  const [openSections, setOpenSections] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    sections.forEach((section) => {
      const hasActiveItem = section.items.some((item) => item.href === pathname);
      if (hasActiveItem) {
        initial.add(section.label);
      }
    });
    if (initial.size === 0) {
      initial.add('Getting Started');
    }
    return initial;
  });

  const toggleSection = (label: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  const filteredSections = useMemo(() => {
    if (!debouncedQuery) return sections;

    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.label.toLowerCase().includes(debouncedQuery.toLowerCase())
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [debouncedQuery]);

  const sidebarClasses = cn(
    'fixed inset-y-0 left-0 z-50 flex flex-col border-r border-border bg-card transition-all duration-300 ease-in-out',
    'md:bg-card/60 md:backdrop-blur-sm',
    isCollapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH_EXPANDED,
    isMobileOpen
      ? 'translate-x-0 pointer-events-auto'
      : '-translate-x-full md:translate-x-0 pointer-events-none md:pointer-events-auto'
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden animate-in fade-in cursor-pointer pointer-events-auto"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside className={sidebarClasses} aria-label="Documentation navigation">
        <SidebarHeader isCollapsed={isCollapsed} onToggleCollapse={onToggleCollapse} />

        {!isCollapsed && <SearchBar value={searchQuery} onChange={setSearchQuery} />}

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scroll-smooth" data-lenis-prevent>
          {filteredSections.map((section) => {
            const isOpen = openSections.has(section.label) || debouncedQuery.length > 0;
            const hasActiveItem = section.items.some((item) => item.href === pathname);

            if (isCollapsed) {
              return (
                <CollapsedSectionIcon
                  key={section.label}
                  section={section}
                  isActive={hasActiveItem}
                  currentPath={pathname}
                  onNavigate={onCloseMobile}
                />
              );
            }

            return (
              <Section
                key={section.label}
                section={section}
                isOpen={isOpen}
                hasActiveItem={hasActiveItem}
                currentPath={pathname}
                onToggle={() => toggleSection(section.label)}
                onCloseMobile={onCloseMobile}
              />
            );
          })}
        </nav>
      </aside>
    </>
  );
}

