// Storage Controller
const StorageCtrl = (function() {
    // public Methods
    return {
        storeItem: function(item) {
            let items

            if(localStorage.getItem('items') == null) {
                items = [];

                items.push(item);

                localStorage.setItem('items', JSON.stringify(items));
            } else {
                items = JSON.parse(localStorage.getItem('items'));

                items.push(item);

                localStorage.setItem('items', JSON.stringify(items));
            }
        },

        getItemsFromStorage: () => {
            let items;

            if(localStorage.getItem('items') == null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }

            return items;
        },

        updateLocalStorage: (updatedItem) => {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach((item, index) => {
                if(updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem);
                }
            });

            localStorage.setItem('items', JSON.stringify(items));
        },

        deleteFromStorage: (id) => {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach((item, index) => {
                if(id === item.id) {
                    items.splice(index, 1);
                }
            });

            localStorage.setItem('items', JSON.stringify(items));
        },

        clearItemsFromStorage: () => {
            localStorage.removeItem('items');
        }
    }
})();

// Item Controller
const ItemCtrl = (function(){

    // Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    const data = {
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0,
    }

    // Public Methods

    return {
        getItems: function() {
            return data.items;
        },

        addItem: function(name, calories) {
            let ID;
        
            // Create ID
            if(data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // calories to number
            calories = parseInt(calories);

            // Create New Item
            newItem = new Item(ID, name, calories);

            data.items.push(newItem);

            return newItem;
        },

        getItemById: function(id) {
            let found = null;

            data.items.forEach(item => {
                if(item.id === id) {
                    found = item;
                }
            });

            return found;
        },

        updateItem: function(name, calories) {
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(item => {
                if(item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });

            return found;
        },

        deleteItem: (id) => {
            // GET IDS
            ids = data.items.map(item => { return item.id });

            // Get Index
            const index = ids.indexOf(id);

            data.items.splice(index, 1);
        },

        clearAllItems: () => {
            data.items = [];
        },

        getCurrentItem: function() {
            return data.currentItem;
        },

        setCurrentItem: function(item) {
            data.currentItem = item;
        },

        getTotalCalories: function() {
            let total = 0;

            data.items.forEach(item => {
                total += item.calories;
            });

            data.totalCalories = total;

            return data.totalCalories;
        },

        logData : function() {
            return data;
        }
    }
})();

// Ui Controller
const UICtrl = (function(){

    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories',

    }

    return {
        populateItemsList: (items) => {
            let output = '';

            items.forEach(item => {
                output += `
                <li class="collection-item" id="item-${item.id}">
                   <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                   <a href="#" class="secondary-content">
                   <i class="edit-item fa fa-pencil"></i>
                   </a>
               </li>`;
            });

       
            // Insert List items
            document.querySelector(UISelectors.itemList).innerHTML = output;
        },

        getItemInput: function() {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value,
            }
        },

        addListItem: function(item) {

            document.querySelector(UISelectors.itemList).style.display = 'block';

            const li = document.createElement('li');

            li.className = 'collection-item';
            li.id = `item-${item.id}`;

            li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                   <i class="edit-item fa fa-pencil"></i>
                </a>`;

            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },

        updateListItem: (item) => {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            listItems = Array.from(listItems);

            listItems.forEach(listItem => {
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `
                    <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                       <i class="edit-item fa fa-pencil"></i>
                    </a>`;
                }
            });
            
        },

        deleteListItem: (id) => {
            const itemID = `#item-${id}`;

            const item = document.querySelector(itemID);

            item.remove();
        },

        removeItems: () => {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            listItems = Array.from(listItems);

            listItems.forEach(item => item.remove());
        },

        clearFeilds: function() {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },

        addItemToForm: function() {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;

            UICtrl.showEditState();
        },

        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },

        showTotalCalories: function(total) {
            document.querySelector(UISelectors.totalCalories).textContent = total;
        },

        clearEditState: function() {
            UICtrl.clearFeilds();
            
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';

        },

        showEditState: function() {
            
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';

        },

        getSelectors: function() {
            return UISelectors
        }
    }
})();

const App = (function(ItemCtrl, StorageCtrl, UICtrl){
    // Load All Events
    const loadEventListeners = function() {
        // Get UI Selectors
        const UISelectors = UICtrl.getSelectors();

        // Add Item Event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        // disable submit on enter
        document.addEventListener('keypress', (e) => {
            if(e.keyCode == 13 || e.which === 13) {
                e.preventDefault();

                return false;
            }
        })

        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick)

        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        document.querySelector(UISelectors.clearBtn).addEventListener('click',clearAllItemsClick);
        
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
    }

    // Item Submit
    const itemAddSubmit = function(e) {
        e.preventDefault();

        // Get form input from the UI controller
        const input = UICtrl.getItemInput();

        // Check for name and calorie input

        if(input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            // Add Item To UI List
            UICtrl.addListItem(newItem);

            const totalCalories = ItemCtrl.getTotalCalories();

            UICtrl.showTotalCalories(totalCalories);

            // Store in local storage
            StorageCtrl.storeItem(newItem);

            // Clear Files
            UICtrl.clearFeilds();
        }

    }

    // Update Item Submit
    const itemEditClick = function(e) {
        e.preventDefault();

        if(e.target.classList.contains('edit-item')) {
            // Get List item id
            const listId = e.target.parentNode.parentNode.id;

            // Break into array
            const listIdArr = listId.split('-');

            // Get acutal ID
            const id = parseInt(listIdArr[1]);

            // Get Item
            const itemToEdit = ItemCtrl.getItemById(id);

            // Set Current Item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add item to form
            UICtrl.addItemToForm();
        }
    }

    const itemUpdateSubmit = function(e) {
        e.preventDefault();

        // Get Item input
        const input = UICtrl.getItemInput();

        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
        // update Ui
        UICtrl.updateListItem(updatedItem);

        const totalCalories = ItemCtrl.getTotalCalories();

        UICtrl.showTotalCalories(totalCalories);

        StorageCtrl.updateLocalStorage(updatedItem); 

        UICtrl.clearEditState();
    }

    const itemDeleteSubmit = function(e) {
        e.preventDefault();

        // Get Current Item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from ui
        UICtrl.deleteListItem(currentItem.id);

        const totalCalories = ItemCtrl.getTotalCalories();

        UICtrl.showTotalCalories(totalCalories);

        StorageCtrl.deleteFromStorage(currentItem.id);

        UICtrl.clearEditState();
    }

    const clearAllItemsClick = () => {

        // delete all items
        ItemCtrl.clearAllItems();
        
        const totalCalories = ItemCtrl.getTotalCalories();

        UICtrl.showTotalCalories(totalCalories);

        UICtrl.removeItems();

        StorageCtrl.clearItemsFromStorage();

        UICtrl.hideList()
    }

    // Public Methods
    return {
        init: function() {
            UICtrl.clearEditState();

            // Fetch Items from data structure
            const items = ItemCtrl.getItems();

            // Check if any items
            if(items.length === 0) {
                UICtrl.hideList();
            } else {
                
                // Popuplate list with items
                UICtrl.populateItemsList(items);
            }

            const totalCalories = ItemCtrl.getTotalCalories();

            UICtrl.showTotalCalories(totalCalories);

            loadEventListeners();
        }
    }
})(ItemCtrl, StorageCtrl, UICtrl);

App.init()