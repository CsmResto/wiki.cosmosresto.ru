import { useId, useState } from 'react'
import type { ReactNode } from 'react'

type WikiTab = {
  label: string
  content: ReactNode
}

export default function WikiTabs({ tabs, variant }: { tabs: WikiTab[]; variant?: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const baseId = useId()

  return (
    <div className="wiki-tabs" data-tabs-style={variant}>
      <div className="wiki-tabs__list" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={index === activeIndex}
            aria-controls={`${baseId}-panel-${index}`}
            className={`wiki-tabs__tab${index === activeIndex ? ' is-active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={index}
          role="tabpanel"
          id={`${baseId}-panel-${index}`}
          aria-labelledby={`${baseId}-tab-${index}`}
          data-tab-label={tab.label}
          className="wiki-tabs__panel"
          hidden={index !== activeIndex}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}
