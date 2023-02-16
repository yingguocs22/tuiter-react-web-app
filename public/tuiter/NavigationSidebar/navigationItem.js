const NavigationItem = (navigation, active) => {
    return(`
         <a href="${navigation.href}" class="list-group-item overflow-hidden ${navigation.name === active ? 'active' : ''}">
            <i class="${navigation.icon} me-1"></i>
            <span class="d-none d-xl-inline">${navigation.name}</span>
         </a>   
   `);
}

export default NavigationItem;