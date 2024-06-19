import './Toolbar.css';

export function Toolbar({ filters, selected, onSelectFilter }) {
    return (
      <div className='toolbar'>
        {filters.map((filter) => (
          <button 
            key={filter} 
            onClick={onSelectFilter}
            className={filter === selected ? 'active' : ''}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  }
  