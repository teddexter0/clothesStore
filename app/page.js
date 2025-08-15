
// app/page.js
'use client'
import { useState, useEffect } from 'react'
import { 
  Menu, X, Search, Heart, ShoppingBag, User, Filter, 
  ChevronDown, Star, Truck, Shield, RotateCcw, Phone,
  Mail, MapPin, Clock, Shirt, Zap, Award, Users
} from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    gender: [],
    age: [],
    size: [],
    color: [],
    occasion: [],
    priceRange: '',
    brand: []
  })
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  // Sample product data
  const sampleProducts = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      brand: "StyleHub",
      price: 1500,
      originalPrice: 2000,
      image: "👕",
      rating: 4.5,
      reviews: 128,
      category: "tops",
      gender: "unisex",
      age: "adult",
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "white", "gray", "navy"],
      occasion: ["casual", "work"],
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Denim Skinny Jeans",
      brand: "UrbanStyle",
      price: 3500,
      originalPrice: 4500,
      image: "👖",
      rating: 4.2,
      reviews: 89,
      category: "bottoms",
      gender: "women",
      age: "adult",
      sizes: ["26", "28", "30", "32"],
      colors: ["blue", "black", "gray"],
      occasion: ["casual", "going-out"],
      isNew: false,
      isSale: true
    },
    {
      id: 3,
      name: "Business Blazer",
      brand: "Executive",
      price: 8500,
      originalPrice: null,
      image: "🧥",
      rating: 4.8,
      reviews: 156,
      category: "outerwear",
      gender: "men",
      age: "adult",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["black", "navy", "charcoal"],
      occasion: ["work", "formal"],
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Summer Dress",
      brand: "Feminine",
      price: 2800,
      originalPrice: 3500,
      image: "👗",
      rating: 4.6,
      reviews: 203,
      category: "dresses",
      gender: "women",
      age: "adult",
      sizes: ["XS", "S", "M", "L"],
      colors: ["floral", "red", "blue", "yellow"],
      occasion: ["casual", "going-out", "vacation"],
      isNew: false,
      isSale: true
    },
    {
      id: 5,
      name: "Kids Graphic Tee",
      brand: "LittleStyle",
      price: 800,
      originalPrice: null,
      image: "👶",
      rating: 4.3,
      reviews: 67,
      category: "tops",
      gender: "kids",
      age: "child",
      sizes: ["2T", "3T", "4T", "5T"],
      colors: ["red", "blue", "green", "yellow"],
      occasion: ["casual", "play"],
      isNew: true,
      isSale: false
    },
    {
      id: 6,
      name: "Athletic Shorts",
      brand: "SportMax",
      price: 1800,
      originalPrice: 2200,
      image: "🩳",
      rating: 4.4,
      reviews: 94,
      category: "bottoms",
      gender: "unisex",
      age: "adult",
      sizes: ["S", "M", "L", "XL"],
      colors: ["black", "gray", "navy", "red"],
      occasion: ["sports", "casual"],
      isNew: false,
      isSale: true
    }
  ]

  useEffect(() => {
    setProducts(sampleProducts)
    setFilteredProducts(sampleProducts)
  }, [])

  // Filter categories and options
  const filterOptions = {
    category: [
      { value: 'tops', label: 'Tops & T-Shirts' },
      { value: 'bottoms', label: 'Bottoms' },
      { value: 'dresses', label: 'Dresses' },
      { value: 'outerwear', label: 'Jackets & Coats' },
      { value: 'shoes', label: 'Shoes' },
      { value: 'accessories', label: 'Accessories' }
    ],
    gender: [
      { value: 'men', label: 'Men' },
      { value: 'women', label: 'Women' },
      { value: 'kids', label: 'Kids' },
      { value: 'unisex', label: 'Unisex' }
    ],
    age: [
      { value: 'child', label: 'Children (2-12)' },
      { value: 'teen', label: 'Teens (13-17)' },
      { value: 'adult', label: 'Adults (18+)' },
      { value: 'senior', label: 'Seniors (60+)' }
    ],
    size: [
      { value: 'XS', label: 'Extra Small' },
      { value: 'S', label: 'Small' },
      { value: 'M', label: 'Medium' },
      { value: 'L', label: 'Large' },
      { value: 'XL', label: 'Extra Large' },
      { value: 'XXL', label: 'Double XL' }
    ],
    color: [
      { value: 'black', label: 'Black', colorClass: 'bg-black' },
      { value: 'white', label: 'White', colorClass: 'bg-white border' },
      { value: 'gray', label: 'Gray', colorClass: 'bg-gray-400' },
      { value: 'navy', label: 'Navy', colorClass: 'bg-blue-900' },
      { value: 'blue', label: 'Blue', colorClass: 'bg-blue-500' },
      { value: 'red', label: 'Red', colorClass: 'bg-red-500' },
      { value: 'green', label: 'Green', colorClass: 'bg-green-500' },
      { value: 'yellow', label: 'Yellow', colorClass: 'bg-yellow-400' }
    ],
    occasion: [
      { value: 'casual', label: 'Casual Wear' },
      { value: 'work', label: 'Work/Office' },
      { value: 'formal', label: 'Formal Events' },
      { value: 'sports', label: 'Sports/Gym' },
      { value: 'going-out', label: 'Going Out' },
      { value: 'vacation', label: 'Vacation/Beach' },
      { value: 'play', label: 'Play/School' }
    ],
    priceRange: [
      { value: '0-1000', label: 'Under KES 1,000' },
      { value: '1000-3000', label: 'KES 1,000 - 3,000' },
      { value: '3000-5000', label: 'KES 3,000 - 5,000' },
      { value: '5000-10000', label: 'KES 5,000 - 10,000' },
      { value: '10000+', label: 'Above KES 10,000' }
    ],
    brand: [
      { value: 'StyleHub', label: 'StyleHub' },
      { value: 'UrbanStyle', label: 'Urban Style' },
      { value: 'Executive', label: 'Executive' },
      { value: 'Feminine', label: 'Feminine' },
      { value: 'LittleStyle', label: 'Little Style' },
      { value: 'SportMax', label: 'Sport Max' }
    ]
  }

  // Apply filters
  useEffect(() => {
    let filtered = products.filter(product => {
      // Category filter
      if (selectedFilters.category.length > 0 && !selectedFilters.category.includes(product.category)) return false
      
      // Gender filter
      if (selectedFilters.gender.length > 0 && !selectedFilters.gender.includes(product.gender)) return false
      
      // Age filter
      if (selectedFilters.age.length > 0 && !selectedFilters.age.includes(product.age)) return false
      
      // Size filter
      if (selectedFilters.size.length > 0 && !selectedFilters.size.some(size => product.sizes.includes(size))) return false
      
      // Color filter
      if (selectedFilters.color.length > 0 && !selectedFilters.color.some(color => product.colors.includes(color))) return false
      
      // Occasion filter
      if (selectedFilters.occasion.length > 0 && !selectedFilters.occasion.some(occasion => product.occasion.includes(occasion))) return false
      
      // Brand filter
      if (selectedFilters.brand.length > 0 && !selectedFilters.brand.includes(product.brand)) return false
      
      // Price range filter
      if (selectedFilters.priceRange) {
        const [min, max] = selectedFilters.priceRange.split('-').map(p => p.replace('+', ''))
        const minPrice = parseInt(min)
        const maxPrice = max ? parseInt(max) : Infinity
        if (product.price < minPrice || product.price > maxPrice) return false
      }
      
      return true
    })
    
    setFilteredProducts(filtered)
  }, [selectedFilters, products])

  const toggleFilter = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: category === 'priceRange' 
        ? value 
        : prev[category].includes(value)
          ? prev[category].filter(item => item !== value)
          : [...prev[category], value]
    }))
  }

  const clearAllFilters = () => {
    setSelectedFilters({
      category: [],
      gender: [],
      age: [],
      size: [],
      color: [],
      occasion: [],
      priceRange: '',
      brand: []
    })
  }

  const getActiveFiltersCount = () => {
    return Object.values(selectedFilters).flat().filter(Boolean).length
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-primary text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <span>🎉 New Arrivals: Up to 50% OFF | Free Delivery on Orders Above KES 3,000</span>
              <div className="hidden md:flex items-center space-x-4">
                <span>📞 +254 712 345 678</span>
                <span>✉️ info@stylehub.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <Shirt className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-display font-bold text-primary">StyleHub</h1>
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for clothes, brands, styles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center text-gray-700 hover:text-primary">
                <Heart className="h-6 w-6" />
                <span className="ml-1 text-sm">Wishlist</span>
              </button>
              <button className="flex items-center text-gray-700 hover:text-primary">
                <ShoppingBag className="h-6 w-6" />
                <span className="ml-1 text-sm">Cart (0)</span>
              </button>
              <button className="hidden md:flex items-center text-gray-700 hover:text-primary">
                <User className="h-6 w-6" />
                <span className="ml-1 text-sm">Account</span>
              </button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex border-t border-gray-200 py-4">
            <div className="flex space-x-8">
              <a href="#new" className="text-gray-700 hover:text-primary font-medium">New Arrivals</a>
              <a href="#women" className="text-gray-700 hover:text-primary font-medium">Women</a>
              <a href="#men" className="text-gray-700 hover:text-primary font-medium">Men</a>
              <a href="#kids" className="text-gray-700 hover:text-primary font-medium">Kids</a>
              <a href="#accessories" className="text-gray-700 hover:text-primary font-medium">Accessories</a>
              <a href="#sale" className="text-accent hover:text-red-600 font-medium">Sale</a>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <nav className="flex flex-col space-y-2">
                  <a href="#new" className="text-gray-700 hover:text-primary font-medium py-2">New Arrivals</a>
                  <a href="#women" className="text-gray-700 hover:text-primary font-medium py-2">Women</a>
                  <a href="#men" className="text-gray-700 hover:text-primary font-medium py-2">Men</a>
                  <a href="#kids" className="text-gray-700 hover:text-primary font-medium py-2">Kids</a>
                  <a href="#accessories" className="text-gray-700 hover:text-primary font-medium py-2">Accessories</a>
                  <a href="#sale" className="text-accent hover:text-red-600 font-medium py-2">Sale</a>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Fashion That
                <span className="block text-accent">Defines You</span>
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Discover the latest trends in fashion. From casual wear to formal attire, 
                find your perfect style at StyleHub Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-accent">Shop New Arrivals</button>
                <button className="btn-secondary">Explore Collections</button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">👗</div>
                    <p className="text-sm">Dresses</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">👔</div>
                    <p className="text-sm">Formal</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">👕</div>
                    <p className="text-sm">Casual</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">👟</div>
                    <p className="text-sm">Shoes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  <div className="flex items-center space-x-2">
                    {getActiveFiltersCount() > 0 && (
                      <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                        {getActiveFiltersCount()}
                      </span>
                    )}
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-gray-500 hover:text-primary"
                    >
                      Clear All
                    </button>
                  </div>
                </div>

                <div className="space-y-6 max-h-96 overflow-y-auto">
                  {/* Category Filter */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                    <div className="space-y-2">
                      {filterOptions.category.map(option => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters.category.includes(option.value)}
                            onChange={() => toggleFilter('category', option.value)}
                            className="rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Gender Filter */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Gender</h4>
                    <div className="flex flex-wrap gap-2">
                      {filterOptions.gender.map(option => (
                        <button
                          key={option.value}
                          onClick={() => toggleFilter('gender', option.value)}
                          className={`filter-tag ${selectedFilters.gender.includes(option.value) ? 'active' : ''}`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Age Filter */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Age Group</h4>
                    <div className="space-y-2">
                      {filterOptions.age.map(option => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters.age.includes(option.value)}
                            onChange={() => toggleFilter('age', option.value)}
                            className="rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Size Filter */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Size</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {filterOptions.size.map(option => (
                        <button
                          key={option.value}
                          onClick={() => toggleFilter('size', option.value)}
                          className={`py-2 px-3 border rounded text-sm font-medium transition-colors ${
                            selectedFilters.size.includes(option.value)
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                          }`}
                        >
                          {option.value}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Filter */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Color</h4>
                    <div className="grid grid-cols-4 gap-3">
                      {filterOptions.color.map(option => (
                        <button
                          key={option.value}
                          onClick={() => toggleFilter('color', option.value)}
                          className={`w-8 h-8 rounded-full ${option.colorClass} border-2 transition-all ${
                            selectedFilters.color.includes(option.value)
                              ? 'border-primary scale-110'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                          title={option.label}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Occasion Filter */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Occasion</h4>
                    <div className="space-y-2">
                      {filterOptions.occasion.map(option => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters.occasion.includes(option.value)}
                            onChange={() => toggleFilter('occasion', option.value)}
                            className="rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                    <div className="space-y-2">
                      {filterOptions.priceRange.map(option => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="priceRange"
                            checked={selectedFilters.priceRange === option.value}
                            onChange={() => toggleFilter('priceRange', option.value)}
                            className="border-gray-300 text-primary focus:ring-primary"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Brand Filter */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Brand</h4>
                    <div className="space-y-2">
                      {filterOptions.brand.map(option => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters.brand.includes(option.value)}
                            onChange={() => toggleFilter('brand', option.value)}
                            className="rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Products Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    Fashion Collection
                  </h2>
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <button
                    onClick={() => setFiltersOpen(!filtersOpen)}
                    className="lg:hidden flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                    {getActiveFiltersCount() > 0 && (
                      <span className="ml-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                        {getActiveFiltersCount()}
                      </span>
                    )}
                  </button>
                  
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                    <option>Customer Rating</option>
                  </select>
                </div>
              </div>

              {/* Active Filters Display */}
              {getActiveFiltersCount() > 0 && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">Active filters:</span>
                    {Object.entries(selectedFilters).map(([category, values]) => {
                      if (category === 'priceRange' && values) {
                        return (
                          <span key={`${category}-${values}`} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                            {filterOptions[category].find(opt => opt.value === values)?.label}
                            <button
                              onClick={() => toggleFilter(category, '')}
                              className="ml-2 hover:text-gray-300"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        )
                      }
                      return Array.isArray(values) && values.map(value => (
                        <span key={`${category}-${value}`} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                          {filterOptions[category].find(opt => opt.value === value)?.label || value}
                          <button
                            onClick={() => toggleFilter(category, value)}
                            className="ml-2 hover:text-gray-300"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))
                    })}
                    <button
                      onClick={clearAllFilters}
                      className="text-xs text-gray-500 hover:text-primary underline"
                    >
                      Clear all
                    </button>
                  </div>
                </div>
              )}

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="product-card group">
                    <div className="relative">
                      <div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                        {product.image}
                      </div>
                      
                      {/* Product Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            NEW
                          </span>
                        )}
                        {product.isSale && (
                          <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                            SALE
                          </span>
                        )}
                      </div>

                      {/* Product Actions */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                          <Heart className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="mb-2">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</p>
                        <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </div>

                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">
                            KES {product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              KES {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        {product.originalPrice && (
                          <span className="text-xs text-green-600 font-medium">
                            Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                          </span>
                        )}
                      </div>

                      {/* Available Sizes */}
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Available sizes:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.sizes.slice(0, 4).map(size => (
                            <span key={size} className="text-xs border border-gray-300 rounded px-2 py-1">
                              {size}
                            </span>
                          ))}
                          {product.sizes.length > 4 && (
                            <span className="text-xs text-gray-500">+{product.sizes.length - 4} more</span>
                          )}
                        </div>
                      </div>

                      {/* Color Options */}
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1">Colors:</p>
                        <div className="flex gap-1">
                          {product.colors.slice(0, 4).map(color => {
                            const colorOption = filterOptions.color.find(opt => opt.value === color)
                            return (
                              <div
                                key={color}
                                className={`w-4 h-4 rounded-full border ${colorOption?.colorClass || 'bg-gray-300'}`}
                                title={colorOption?.label || color}
                              />
                            )
                          })}
                          {product.colors.length > 4 && (
                            <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 4}</span>
                          )}
                        </div>
                      </div>

                      <button className="w-full btn-primary">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search terms to find what you're looking for.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="btn-primary"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Delivery</h3>
              <p className="text-sm text-gray-600">On orders above KES 3,000 within Nairobi</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-600">M-Pesa, Card payments & Cash on delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day return policy for all items</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Customer service always available</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                About StyleHub Kenya
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, StyleHub Kenya has become the leading online fashion destination 
                for style-conscious shoppers across Kenya. We curate the latest trends from local 
                and international brands, making fashion accessible to everyone.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <div className="text-gray-600">Products Available</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Award className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold mb-2">Quality Assured</h4>
                  <p className="text-sm text-gray-600">Every item is carefully selected for quality and style</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">Community First</h4>
                  <p className="text-sm text-gray-600">Supporting local fashion and Kenyan designers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">Everything you need to know about shopping with us</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What are your delivery options and costs?",
                answer: "We offer free delivery within Nairobi for orders above KES 3,000. For orders below this amount, delivery costs KES 300. Outside Nairobi, delivery costs vary by location (KES 500-1,000). Express delivery (same day in Nairobi) is available for KES 800."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept M-Pesa, Visa/Mastercard, and Cash on Delivery (within Nairobi only). All online payments are secured with SSL encryption for your safety."
              },
              {
                question: "What is your return and exchange policy?",
                answer: "We offer a 30-day return policy for unworn items with original tags. Exchanges are free, while returns incur a KES 200 processing fee. Items must be in original condition with receipt."
              },
              {
                question: "How do I know what size to order?",
                answer: "Each product page has a detailed size guide. We recommend measuring yourself and comparing with our size charts. Our customer service team can also help you choose the right size via WhatsApp or phone."
              },
              {
                question: "Do you have physical stores?",
                answer: "Yes! We have showrooms in Westlands and Eastleigh, Nairobi. You can visit to try on items, pick up orders, or return products. Check our contact section for addresses and opening hours."
              },
              {
                question: "How can I track my order?",
                answer: "Once your order ships, you'll receive an SMS and email with tracking information. You can also log into your account to view order status and tracking details."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">We're here to help with all your fashion needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Customer Service</p>
                    <p className="text-gray-600">+254 712 345 678</p>
                    <p className="text-sm text-gray-500">Mon-Sat: 8AM-8PM, Sun: 10AM-6PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Support</p>
                    <p className="text-gray-600">info@stylehub.co.ke</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Showrooms</p>
                    <p className="text-gray-600">Westlands Mall, 2nd Floor</p>
                    <p className="text-gray-600">Eastleigh City Mall, Ground Floor</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Store Hours</p>
                    <p className="text-gray-600">Mon-Sat: 10AM-8PM</p>
                    <p className="text-gray-600">Sun: 12PM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Returns & Exchanges</option>
                    <option>Size Guide Help</option>
                    <option>Partnership Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white text-primary w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                  <Shirt className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-bold">StyleHub</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Kenya's premier online fashion destination. Quality clothing for every style and occasion.
              </p>
              <div className="flex space-x-4">
                {['📘', '📷', '🐦', '📺'].map((emoji, index) => (
                  <div key={index} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-sm">{emoji}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#women" className="hover:text-white transition-colors">Women's Fashion</a></li>
                <li><a href="#men" className="hover:text-white transition-colors">Men's Fashion</a></li>
                <li><a href="#kids" className="hover:text-white transition-colors">Kids & Baby</a></li>
                <li><a href="#accessories" className="hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#sale" className="hover:text-white transition-colors">Sale Items</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#shipping" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#returns" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#size-guide" className="hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Get the latest fashion updates and exclusive offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:bg-white/20"
                />
                <button className="bg-accent hover:bg-red-600 px-4 py-2 rounded-r-lg transition-colors">
                  ✓
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              &copy; 2025 StyleHub Kenya. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
