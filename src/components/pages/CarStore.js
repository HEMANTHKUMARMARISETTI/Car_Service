// carsStore.js
import create from 'zustand';

const useCarsStore = create((set) => ({
  selectedBrand: null,
  cart: [],
  priceFilter: "",
  searchQuery: "",
  toLocation: "",
  fromLocation: "",
  rentalDays: "",
  rentalMonths: "", // Added rentalMonths
  showInputFields: false,
  selectedCar: null,

  setSelectedBrand: (selectedBrand) => set({ selectedBrand }),
  setCart: (cart) => set({ cart }),
  setPriceFilter: (priceFilter) => set({ priceFilter }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setToLocation: (toLocation) => set({ toLocation }),
  setFromLocation: (fromLocation) => set({ fromLocation }),
  setRentalDays: (rentalDays) => set({ rentalDays }),
  setRentalMonths: (rentalMonths) => set({ rentalMonths }),
  setShowInputFields: (showInputFields) => set({ showInputFields }),
  setSelectedCar: (selectedCar) => set({ selectedCar }),
}));

export default useCarsStore;
