import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, X, ShoppingCart, MessageCircle, Download } from 'lucide-react';
import pamphletPDF from '../assets/City-Chair-Pamphlet.pdf';



const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        // Writing & Display Boards
        {
            id: 1,
            name: 'White Board',
            category: 'boards',
            image: '/products/white board.webp',
            price: '₹2,500',
            description: 'High-quality magnetic white board with smooth writing surface',
            features: ['Magnetic surface', 'Easy to clean', 'Durable aluminum frame', 'Multiple sizes available']
        },
        {
            id: 2,
            name: 'Chalk Board',
            category: 'boards',
            image: '/products/chalk board.webp',
            price: '₹1,800',
            description: 'Traditional chalk board perfect for classrooms and offices',
            features: ['Smooth writing surface', 'Wooden frame', 'Easy maintenance', 'Classic design']
        },
        {
            id: 3,
            name: 'Green Cera Board',
            category: 'boards',
            image: '/products/green cera boards(with magnetic capabilities).jpg',
            price: '₹3,200',
            description: 'Premium ceramic board with magnetic capabilities',
            features: ['Magnetic surface', 'Scratch resistant', 'Long-lasting', 'Professional finish']
        },
        {
            id: 4,
            name: 'Cork Board',
            category: 'boards',
            image: '/products/cork board.jpg',
            price: '₹2,000',
            description: 'Natural cork notice board for pinning documents and notes',
            features: ['Natural cork material', 'Pin-friendly surface', 'Wooden frame', 'Multiple sizes']
        },

        // Presentation Equipment
        {
            id: 5,
            name: 'Flip Chart with Easel Stand',
            category: 'presentation',
            image: '/products/flip chart with easel stand.webp',
            price: '₹4,500',
            description: 'Professional flip chart with adjustable easel stand',
            features: ['Adjustable height', 'Portable design', 'Paper holder', 'Stable base']
        },
        {
            id: 6,
            name: 'Lecturn Podium',
            category: 'presentation',
            image: '/products/lecturn podium.jpg',
            price: '₹8,500',
            description: 'Professional podium for presentations and speeches',
            features: ['Sturdy construction', 'Storage shelf', 'Professional design', 'Easy assembly']
        },
        {
            id: 7,
            name: 'Keyboard Tray',
            category: 'presentation',
            image: '/products/keyboard.jpg',
            price: '₹1,500',
            description: 'Ergonomic keyboard tray for comfortable typing',
            features: ['Adjustable angle', 'Space-saving', 'Easy installation', 'Durable material']
        },

        // Information Displays
        {
            id: 8,
            name: 'Name Plates',
            category: 'displays',
            image: '/products/name plates.webp',
            price: '₹500',
            description: 'Professional name plates for offices and desks',
            features: ['Customizable', 'Premium finish', 'Multiple designs', 'Durable material']
        },
        {
            id: 9,
            name: 'Signages',
            category: 'displays',
            image: '/products/signages.png',
            price: '₹1,200',
            description: 'Clear and professional signage solutions',
            features: ['Custom text', 'Weather resistant', 'Easy to install', 'Professional look']
        },
        {
            id: 10,
            name: 'Planner Board',
            category: 'displays',
            image: '/products/planner.png',
            price: '₹3,500',
            description: 'Wall-mounted planner for scheduling and organization',
            features: ['Monthly/weekly layouts', 'Dry-erase surface', 'Grid design', 'Easy to update']
        },

        // Display Stands
        {
            id: 11,
            name: 'Acrylic Magazine Stand',
            category: 'stands',
            image: '/products/acrclic magazine stand.jpg',
            price: '₹2,800',
            description: 'Modern acrylic magazine display stand',
            features: ['Clear acrylic', 'Multiple pockets', 'Sleek design', 'Easy to clean']
        },
        {
            id: 12,
            name: 'Newspaper Stand',
            category: 'stands',
            image: '/products/newspaper stand.jpg',
            price: '₹3,200',
            description: 'Professional newspaper display stand',
            features: ['Multiple tiers', 'Sturdy construction', 'Space-efficient', 'Easy access']
        },
        {
            id: 13,
            name: 'Rotating Book Stand',
            category: 'stands',
            image: '/products/rotating book stand.webp',
            price: '₹5,500',
            description: '360-degree rotating book display stand',
            features: ['360° rotation', 'Multiple shelves', 'Compact design', 'Easy browsing']
        },
        {
            id: 14,
            name: 'Map Stand',
            category: 'stands',
            image: '/products/map stand.jpg',
            price: '₹4,200',
            description: 'Professional map display stand',
            features: ['Adjustable height', 'Stable base', 'Easy to use', 'Portable']
        },
        {
            id: 15,
            name: 'Lobby Stand',
            category: 'stands',
            image: '/products/lobby stand(with dataline board).jpg',
            price: '₹6,500',
            description: 'Premium lobby display stand with dataline board',
            features: ['Professional appearance', 'Information display', 'Durable construction', 'Easy updates']
        },
        {
            id: 16,
            name: 'Reverse U Stands',
            category: 'stands',
            image: '/products/reverse u stands.jpg',
            price: '₹3,800',
            description: 'Versatile reverse U display stands',
            features: ['Stable design', 'Easy assembly', 'Professional look', 'Multiple uses']
        },
        {
            id: 17,
            name: 'Star Based Stand',
            category: 'stands',
            image: '/products/star based stand(with acryclic cover).png',
            price: '₹5,200',
            description: 'Star-based stand with acrylic cover',
            features: ['Stable star base', 'Protective cover', 'Modern design', 'Easy to clean']
        },
        {
            id: 18,
            name: 'Twin Pole Stand',
            category: 'stands',
            image: '/products/twin pole stand(with combination board).png',
            price: '₹7,500',
            description: 'Twin pole stand with combination board',
            features: ['Dual support', 'Combination board', 'Adjustable', 'Professional grade']
        },

        // Specialized Display Systems
        {
            id: 19,
            name: 'Avitrol Display System',
            category: 'systems',
            image: '/products/avitrol.jpg',
            price: '₹12,500',
            description: 'Advanced Avitrol display system',
            features: ['Professional system', 'Easy installation', 'Modular design', 'High quality']
        },
        {
            id: 20,
            name: 'Deflex System',
            category: 'systems',
            image: '/products/deflex.jpg',
            price: '₹10,800',
            description: 'Flexible Deflex display system',
            features: ['Flexible mounting', 'Easy updates', 'Professional look', 'Durable']
        },
        {
            id: 21,
            name: 'Ecodisplay',
            category: 'systems',
            image: '/products/ecodisplay.jpg',
            price: '₹9,500',
            description: 'Eco-friendly display system',
            features: ['Sustainable materials', 'Modern design', 'Easy assembly', 'Recyclable']
        },
        {
            id: 22,
            name: 'Infostack',
            category: 'systems',
            image: '/products/infostack.jpg',
            price: '₹8,200',
            description: 'Stackable information display system',
            features: ['Modular stacking', 'Space-efficient', 'Easy organization', 'Professional']
        },
        {
            id: 23,
            name: 'Minitrol',
            category: 'systems',
            image: '/products/minitrol.png',
            price: '₹6,800',
            description: 'Compact Minitrol display system',
            features: ['Compact size', 'Easy to use', 'Professional finish', 'Versatile']
        },
        {
            id: 24,
            name: 'Kiosk Display',
            category: 'systems',
            image: '/products/kiosk.png',
            price: '₹25,000',
            description: 'Professional kiosk display system',
            features: ['Full kiosk solution', 'Interactive ready', 'Durable construction', 'Modern design']
        },
        {
            id: 25,
            name: 'Display in Minutes',
            category: 'systems',
            image: '/products/display in minutes.jpg',
            price: '₹7,500',
            description: 'Quick-setup display system',
            features: ['Fast assembly', 'No tools required', 'Portable', 'Professional look']
        },
        {
            id: 26,
            name: 'Multipanel System',
            category: 'systems',
            image: '/products/multipanel.jpg',
            price: '₹11,200',
            description: 'Multi-panel display system',
            features: ['Multiple panels', 'Flexible configuration', 'Professional grade', 'Easy updates']
        },
        {
            id: 27,
            name: 'Posterpeg',
            category: 'systems',
            image: '/products/posterpeg.jpg',
            price: '₹4,500',
            description: 'Poster display peg system',
            features: ['Easy poster changes', 'Secure mounting', 'Professional look', 'Durable']
        },
        {
            id: 28,
            name: 'Scrollup Banner',
            category: 'systems',
            image: '/products/scrollup.jpg',
            price: '₹3,800',
            description: 'Retractable scroll-up banner stand',
            features: ['Retractable design', 'Portable', 'Easy setup', 'Professional finish']
        },
        {
            id: 29,
            name: 'Snapup Frames',
            category: 'systems',
            image: '/products/snapup frames.jpg',
            price: '₹2,200',
            description: 'Quick-change snap-up frames',
            features: ['Quick poster changes', 'Snap-open design', 'Wall-mounted', 'Professional']
        },
        {
            id: 30,
            name: 'Translide Box',
            category: 'systems',
            image: '/products/translide box.png',
            price: '₹8,900',
            description: 'Translucent slide display box',
            features: ['Backlit ready', 'Professional finish', 'Easy installation', 'Modern design']
        },
        {
            id: 31,
            name: 'Directer System',
            category: 'systems',
            image: '/products/directer.png',
            price: '₹9,800',
            description: 'Professional direction and wayfinding system',
            features: ['Clear signage', 'Modular design', 'Easy updates', 'Professional look']
        },
        // Slides
        { id: 32, name: 'Dolphin Slide', category: 'slides', image: '/products/Dolphin slide.webp', price: '₹12,500', description: 'Colorful dolphin-themed slide', features: ['Safe design', 'Bright colors', 'Durable material', 'Easy assembly'] },
        { id: 33, name: 'Tower Slide', category: 'slides', image: '/products/Tower slide.webp', price: '₹15,000', description: 'Multi-level tower slide', features: ['Multiple levels', 'Safe railings', 'Weather resistant', 'Fun design'] },
        { id: 34, name: 'Elephant Slide', category: 'slides', image: '/products/elephant slide.webp', price: '₹14,500', description: 'Elephant-shaped play slide', features: ['Unique design', 'Safe landing', 'Colorful finish', 'Sturdy build'] },
        { id: 35, name: 'Castle Slide', category: 'slides', image: '/products/castle slide.jpg', price: '₹18,000', description: 'Castle-themed slide for kids', features: ['Royal design', 'Multiple entry points', 'Safe structure', 'Imaginative play'] },
        { id: 36, name: 'Bear Slide', category: 'slides', image: '/products/bear slide.webp', price: '₹11,000', description: 'Cute bear-themed slide', features: ['Adorable design', 'Smooth slide', 'Safe edges', 'Compact size'] },
        { id: 37, name: 'Giraffe Slide', category: 'slides', image: '/products/giraffe slide.jpg', price: '₹13,500', description: 'Tall giraffe slide', features: ['Tall design', 'Safe climb', 'Bright colors', 'Durable'] },
        { id: 38, name: 'Happy Slide', category: 'slides', image: '/products/happy slide.jpg', price: '₹9,500', description: 'Cheerful slide for toddlers', features: ['Toddler-friendly', 'Safe height', 'Easy climb', 'Colorful'] },
        { id: 39, name: 'Junior Slide', category: 'slides', image: '/products/junior slide.webp', price: '₹7,500', description: 'Small slide for young kids', features: ['Compact', 'Safe for juniors', 'Easy to move', 'Bright colors'] },
        // Rockers & Riders
        { id: 40, name: 'Horse Rocker', category: 'rockers', image: '/products/horse rocker.jpg', price: '₹4,500', description: 'Classic horse rocking toy', features: ['Smooth rocking', 'Safe handles', 'Sturdy base', 'Fun design'] },
        { id: 41, name: 'Elephant Rocker', category: 'rockers', image: '/products/elephant rocker.jpg', price: '₹4,800', description: 'Elephant-shaped rocker', features: ['Cute design', 'Safe rocking', 'Durable', 'Colorful'] },
        { id: 42, name: 'Dolphin Rider', category: 'rockers', image: '/products/dolphin rider.webp', price: '₹3,500', description: 'Dolphin spring rider', features: ['Spring action', 'Safe seat', 'Weather resistant', 'Fun ride'] },
        { id: 43, name: 'Horse Rider', category: 'rockers', image: '/products/horse rider.jpg', price: '₹5,200', description: 'Horse spring rider', features: ['Strong springs', 'Comfortable seat', 'Safe design', 'Outdoor use'] },
        { id: 44, name: 'Ponny Rocker', category: 'rockers', image: '/products/ponny rocker.jpg', price: '₹4,200', description: 'Pony rocking toy', features: ['Smooth motion', 'Safe handles', 'Bright colors', 'Durable'] },
        { id: 45, name: 'Fish Rocker', category: 'rockers', image: '/products/fish rocker.jpg', price: '₹3,800', description: 'Fish-themed rocker', features: ['Unique design', 'Safe rocking', 'Colorful', 'Sturdy'] },
        { id: 46, name: 'Boat Rocker', category: 'rockers', image: '/products/boat rocker.webp', price: '₹6,500', description: 'Boat-shaped rocker', features: ['Multi-child', 'Safe design', 'Fun theme', 'Durable'] },
        { id: 47, name: 'Tiger Bike Rocker', category: 'rockers', image: '/products/tiger bike rocker.jpg', price: '₹5,500', description: 'Tiger bike rocker', features: ['Bike style', 'Safe seat', 'Fun design', 'Sturdy'] },
        // Play Stations
        { id: 48, name: '3 in 1 Play Station', category: 'playstations', image: '/products/3 in 1 play station.jpg', price: '₹25,000', description: 'Multi-activity play station', features: ['3 activities', 'Safe design', 'Durable', 'Fun for all'] },
        { id: 49, name: 'Combo Play Station', category: 'playstations', image: '/products/combo play station.jpg', price: '₹28,000', description: 'Complete play station combo', features: ['Multiple activities', 'Safe structure', 'Colorful', 'Engaging'] },
        { id: 50, name: 'Jumbo Play Station', category: 'playstations', image: '/products/jumbo play station.jpg', price: '₹35,000', description: 'Large play station', features: ['Multiple kids', 'Various activities', 'Safe design', 'Durable'] },
        { id: 51, name: 'Multi Play Station', category: 'playstations', image: '/products/multi play station.jpg', price: '₹30,000', description: 'Multi-activity station', features: ['Slides & swings', 'Safe structure', 'Colorful', 'Fun'] },
        { id: 52, name: 'Play Junction (Medium)', category: 'playstations', image: '/products/play junction(medium).jpg', price: '₹22,000', description: 'Medium-sized play junction', features: ['Multiple activities', 'Safe design', 'Compact', 'Durable'] },
        // Furniture
        { id: 53, name: 'Baby Chair', category: 'furniture', image: '/products/baby chair.jpg', price: '₹1,500', description: 'Comfortable baby chair', features: ['Ergonomic', 'Safe design', 'Colorful', 'Durable'] },
        { id: 54, name: 'Baby Bench', category: 'furniture', image: '/products/baby bench.jpg', price: '₹2,500', description: 'Baby seating bench', features: ['Multi-seating', 'Safe edges', 'Sturdy', 'Colorful'] },
        { id: 55, name: 'Combined Metal Desk with Chair', category: 'furniture', image: '/products/combined metal desk with chair.jpg', price: '₹3,500', description: 'Desk and chair combo', features: ['Space-saving', 'Durable metal', 'Comfortable', 'Study-friendly'] },
        { id: 56, name: 'Round Table', category: 'furniture', image: '/products/round table.jpg', price: '₹4,000', description: 'Round activity table', features: ['Group activities', 'Safe edges', 'Sturdy', 'Colorful'] },
        { id: 57, name: 'Moon Shape Table', category: 'furniture', image: '/products/moon shape table.jpg', price: '₹4,500', description: 'Crescent-shaped table', features: ['Unique design', 'Group seating', 'Safe', 'Durable'] },
        { id: 58, name: 'Teacher Chair', category: 'furniture', image: '/products/teacher chair.jpg', price: '₹2,800', description: 'Comfortable teacher chair', features: ['Ergonomic', 'Durable', 'Professional', 'Comfortable'] },
        // Play Equipment
        { id: 59, name: 'Basketball Goal Post', category: 'playequip', image: '/products/3 in  1 basket ball goal post pour a ring basket ball stand.webp', price: '₹8,500', description: '3-in-1 basketball stand', features: ['Adjustable height', 'Multiple games', 'Durable', 'Fun'] },
        { id: 60, name: 'Activity Gym', category: 'playequip', image: '/products/activity gym.webp', price: '₹15,000', description: 'Complete activity gym', features: ['Multiple activities', 'Safe design', 'Durable', 'Engaging'] },
        { id: 61, name: 'Horse See Saw', category: 'playequip', image: '/products/horse see saw.webp', price: '₹6,500', description: 'Horse-themed see-saw', features: ['Safe seating', 'Smooth motion', 'Durable', 'Fun design'] },
        { id: 62, name: 'Fish Merry Go Round', category: 'playequip', image: '/products/fish merry go round.jpg', price: '₹12,000', description: 'Fish-themed merry-go-round', features: ['Multi-child', 'Safe rotation', 'Colorful', 'Fun'] },
        { id: 63, name: 'Duck Jumper', category: 'playequip', image: '/products/duck jumper.jpg', price: '₹4,500', description: 'Duck spring jumper', features: ['Spring action', 'Safe seat', 'Durable', 'Fun'] },
        { id: 64, name: 'Balancer', category: 'playequip', image: '/products/balancer.webp', price: '₹3,500', description: 'Balance training equipment', features: ['Develops balance', 'Safe design', 'Durable', 'Educational'] },
        // Storage
        { id: 65, name: 'Book Stand', category: 'storage', image: '/products/book stand.jpg', price: '₹2,500', description: 'Colorful book storage', features: ['Multiple shelves', 'Safe edges', 'Colorful', 'Organized'] },
        { id: 66, name: 'Toy Stand', category: 'storage', image: '/products/toy stand.jpg', price: '₹3,000', description: 'Toy storage rack', features: ['Multiple bins', 'Easy access', 'Colorful', 'Organized'] },
        { id: 67, name: 'Baby Shoe & Toy Rack', category: 'storage', image: '/products/baby shoe & toy rack.jpg', price: '₹2,800', description: 'Combo storage rack', features: ['Dual purpose', 'Organized', 'Colorful', 'Compact'] },
        { id: 68, name: 'Multi Purpose Rack', category: 'storage', image: '/products/multi puporse rack.jpg', price: '₹3,500', description: 'Versatile storage rack', features: ['Multiple uses', 'Organized', 'Durable', 'Colorful'] },
        // Baby Products
        { id: 69, name: 'Baby Twist Car', category: 'baby', image: '/products/baby twist car.jpg', price: '₹2,500', description: 'Twist and go car', features: ['No pedals', 'Safe design', 'Fun ride', 'Durable'] },
        { id: 70, name: 'Baby Happy Car', category: 'baby', image: '/products/baby happy car.webp', price: '₹2,800', description: 'Happy ride-on car', features: ['Comfortable seat', 'Safe design', 'Colorful', 'Fun'] },
        { id: 71, name: 'Baby Rocket Car', category: 'baby', image: '/products/baby rocket car(jr.).webp', price: '₹3,200', description: 'Rocket-shaped car', features: ['Unique design', 'Safe ride', 'Fun', 'Durable'] },
        { id: 72, name: 'Ball Pool (Round)', category: 'baby', image: '/products/ball pool(round).webp', price: '₹8,500', description: 'Round ball pool', features: ['Safe walls', 'Includes balls', 'Colorful', 'Fun'] },
        { id: 73, name: 'EVA Mats', category: 'baby', image: '/products/EVA mats.jpg', price: '₹1,500', description: 'Soft play mats', features: ['Soft cushioning', 'Safe', 'Easy clean', 'Colorful'] },
        { id: 74, name: 'Baby Balls', category: 'baby', image: '/products/baby balls.jpg', price: '₹800', description: 'Colorful play balls', features: ['Soft material', 'Safe', 'Colorful', 'Fun'] },
        // More Slides
        { id: 75, name: 'Appu Slide', category: 'slides', image: '/products/aPPU SLIDE.jpg', price: '₹10,500', description: 'Elephant-themed Appu slide', features: ['Fun design', 'Safe', 'Durable', 'Colorful'] },
        { id: 76, name: 'Big Slide', category: 'slides', image: '/products/big slide.jpeg', price: '₹16,000', description: 'Large playground slide', features: ['High capacity', 'Safe design', 'Durable', 'Fun'] },
        { id: 77, name: 'Carrot Slide', category: 'slides', image: '/products/carrot slide.webp', price: '₹11,500', description: 'Carrot-shaped slide', features: ['Unique design', 'Safe', 'Colorful', 'Fun'] },
        { id: 78, name: 'Cute Slide', category: 'slides', image: '/products/cute slide.webp', price: '₹9,000', description: 'Adorable small slide', features: ['Cute design', 'Safe for toddlers', 'Compact', 'Colorful'] },
        { id: 79, name: 'Dolphin Slide cum Swing', category: 'slides', image: '/products/dolphin slide cum swing.jpg', price: '₹18,000', description: '2-in-1 slide and swing', features: ['Dual function', 'Safe', 'Fun', 'Durable'] },
        { id: 80, name: 'Double Slider', category: 'slides', image: '/products/double slider.jpg', price: '₹20,000', description: 'Twin slide system', features: ['Two slides', 'Safe', 'Fun for multiple kids', 'Durable'] },
        { id: 81, name: 'Fish Slide', category: 'slides', image: '/products/fish slide.webp', price: '₹10,000', description: 'Fish-themed slide', features: ['Fun design', 'Safe', 'Colorful', 'Durable'] },
        { id: 82, name: 'Folding Slide', category: 'slides', image: '/products/folding slide.jpg', price: '₹8,500', description: 'Portable folding slide', features: ['Foldable', 'Easy storage', 'Safe', 'Convenient'] },
        { id: 83, name: 'Giraffe Slide Jr', category: 'slides', image: '/products/giraffe slide(jr).webp', price: '₹12,000', description: 'Junior giraffe slide', features: ['Smaller size', 'Safe', 'Colorful', 'Fun'] },
        { id: 84, name: 'Giraffe Slide cum Swing', category: 'slides', image: '/products/giraffe slide cum swing.jpg', price: '₹19,000', description: 'Giraffe slide with swing', features: ['2-in-1', 'Safe', 'Fun', 'Durable'] },
        { id: 85, name: 'Goal Post Slide', category: 'slides', image: '/products/goal post slide.webp', price: '₹17,000', description: 'Football goal slide combo', features: ['Sports theme', 'Safe', 'Fun', 'Engaging'] },
        { id: 86, name: 'Happy Slide with Swing', category: 'slides', image: '/products/happy slide with swing.webp', price: '₹16,500', description: 'Slide and swing combo', features: ['2-in-1', 'Safe', 'Colorful', 'Fun'] },
        { id: 87, name: 'Hut Slide', category: 'slides', image: '/products/hut slide.jpg', price: '₹14,000', description: 'House-themed slide', features: ['Unique design', 'Safe', 'Imaginative play', 'Durable'] },
        { id: 88, name: 'Jumbo Slide', category: 'slides', image: '/products/jumbo slide.jpg', price: '₹22,000', description: 'Extra large slide', features: ['Big size', 'Safe', 'High capacity', 'Durable'] },
        { id: 89, name: 'Rabbit Slide', category: 'slides', image: '/products/rabbit slide.jpg', price: '₹11,000', description: 'Bunny-themed slide', features: ['Cute design', 'Safe', 'Colorful', 'Fun'] },
        { id: 90, name: 'Round Metal Slide', category: 'slides', image: '/products/round metal slide.webp', price: '₹13,500', description: 'Circular metal slide', features: ['Unique shape', 'Durable metal', 'Safe', 'Fun'] },
        { id: 91, name: 'Small Slider', category: 'slides', image: '/products/small slider.jpg', price: '₹7,000', description: 'Compact slide', features: ['Space-saving', 'Safe', 'Perfect for small spaces', 'Colorful'] },
        { id: 92, name: 'Zig Zag Metal Slide', category: 'slides', image: '/products/zig zag metal slide.webp', price: '₹15,500', description: 'Wavy metal slide', features: ['Exciting design', 'Safe', 'Durable', 'Fun'] },
        // More Rockers & Riders
        { id: 93, name: 'Crocodile Ride', category: 'rockers', image: '/products/crocodile ride.jpg', price: '₹4,200', description: 'Crocodile spring rider', features: ['Fun design', 'Safe', 'Durable', 'Outdoor use'] },
        { id: 94, name: 'Dino Ride', category: 'rockers', image: '/products/dino ride.jpg', price: '₹4,500', description: 'Dinosaur spring rider', features: ['Exciting design', 'Safe', 'Durable', 'Fun'] },
        { id: 95, name: 'Dino See-Saw', category: 'rockers', image: '/products/dino-see-saw.jpg', price: '₹7,000', description: 'Dinosaur see-saw', features: ['Unique design', 'Safe', 'Fun', 'Durable'] },
        { id: 96, name: 'Donald Rocker', category: 'rockers', image: '/products/donald rocker.jpg', price: '₹4,000', description: 'Duck rocker', features: ['Cute design', 'Safe', 'Smooth rocking', 'Colorful'] },
        { id: 97, name: 'Dual Rider', category: 'rockers', image: '/products/dual rider.webp', price: '₹6,000', description: 'Two-seater spring rider', features: ['Multi-child', 'Safe', 'Fun', 'Durable'] },
        { id: 98, name: 'Elephant Multi Rocker', category: 'rockers', image: '/products/elephant multi rocker.jpg', price: '₹8,500', description: 'Multi-child elephant rocker', features: ['Multiple seats', 'Safe', 'Fun', 'Durable'] },
        { id: 99, name: 'Engine Rocker', category: 'rockers', image: '/products/engine rocker.webp', price: '₹5,000', description: 'Train engine rocker', features: ['Fun design', 'Safe', 'Imaginative play', 'Durable'] },
        { id: 100, name: 'Fish Rider', category: 'rockers', image: '/products/fish rider.jpg', price: '₹3,200', description: 'Fish spring rider', features: ['Cute design', 'Safe', 'Durable', 'Fun'] },
        { id: 101, name: 'Fish Spring Rider Heavy', category: 'rockers', image: '/products/fish spring rider(heavy).jpg', price: '₹5,500', description: 'Heavy-duty fish rider', features: ['Strong springs', 'Safe', 'Durable', 'Outdoor use'] },
        { id: 102, name: 'Giraffe Multi Rocker', category: 'rockers', image: '/products/giraffe multi rocker.jpg', price: '₹8,800', description: 'Multi-child giraffe rocker', features: ['Multiple seats', 'Safe', 'Fun', 'Durable'] },
        { id: 103, name: 'Hen Multi Rocker', category: 'rockers', image: '/products/hen multi rocker.jpg', price: '₹8,200', description: 'Multi-child hen rocker', features: ['Multiple seats', 'Safe', 'Colorful', 'Fun'] },
        { id: 104, name: 'Horse Multi Rocker', category: 'rockers', image: '/products/horse multi rocker.jpg', price: '₹9,000', description: 'Multi-child horse rocker', features: ['Multiple seats', 'Safe', 'Fun', 'Durable'] },
        { id: 105, name: 'Horse Rider with Base', category: 'rockers', image: '/products/horse rider(with base).jpg', price: '₹5,800', description: 'Horse rider with base', features: ['Stable base', 'Safe', 'Durable', 'Fun'] },
        { id: 106, name: 'Horse See Saw Big', category: 'rockers', image: '/products/horse see saw(big).jpg', price: '₹7,500', description: 'Large horse see-saw', features: ['Big size', 'Safe', 'Fun', 'Durable'] },
        { id: 107, name: 'Horse Spring Rider Heavy', category: 'rockers', image: '/products/horse spring rider(heavy).jpg', price: '₹6,000', description: 'Heavy-duty horse rider', features: ['Strong springs', 'Safe', 'Durable', 'Outdoor use'] },
        { id: 108, name: 'Jumboo Rocker', category: 'rockers', image: '/products/jumboo rocker.jpg', price: '₹4,800', description: 'Jumbo rocker', features: ['Large size', 'Safe', 'Fun', 'Durable'] },
        { id: 109, name: 'New Rocker Deluxe', category: 'rockers', image: '/products/new rocker(dlx).webp', price: '₹5,500', description: 'Deluxe rocker', features: ['Premium design', 'Safe', 'Comfortable', 'Durable'] },
        { id: 110, name: 'Parrot Rocker', category: 'rockers', image: '/products/parrot rocker.webp', price: '₹4,300', description: 'Parrot-themed rocker', features: ['Colorful design', 'Safe', 'Fun', 'Durable'] },
        { id: 111, name: 'Ponny Rider with Base', category: 'rockers', image: '/products/ponny rider(with base).jpg', price: '₹5,400', description: 'Pony rider with base', features: ['Stable base', 'Safe', 'Fun', 'Durable'] },
        { id: 112, name: 'Ponny Rider', category: 'rockers', image: '/products/ponny rider.jpg', price: '₹4,600', description: 'Pony spring rider', features: ['Fun design', 'Safe', 'Durable', 'Outdoor use'] },
        { id: 113, name: 'Puppy Rider with Base', category: 'rockers', image: '/products/puppy rider(with base).jpg', price: '₹5,600', description: 'Puppy rider with base', features: ['Stable base', 'Safe', 'Cute design', 'Durable'] },
        { id: 114, name: 'Puppy Rider', category: 'rockers', image: '/products/puppy rider.jpg', price: '₹4,800', description: 'Puppy spring rider', features: ['Cute design', 'Safe', 'Fun', 'Durable'] },
        { id: 115, name: 'Rabbit V', category: 'rockers', image: '/products/rabbit v.jpg', price: '₹4,100', description: 'Rabbit rocker', features: ['Cute design', 'Safe', 'Fun', 'Colorful'] },
        { id: 116, name: 'Ship Rocker', category: 'rockers', image: '/products/ship rocker.jpg', price: '₹6,800', description: 'Ship-themed rocker', features: ['Imaginative play', 'Safe', 'Fun', 'Durable'] },
        // More Play Stations
        { id: 117, name: '2 in 1 Play Station', category: 'playstations', image: '/products/2 in 1  play station.jpg', price: '₹22,000', description: 'Dual activity play station', features: ['2 activities', 'Safe', 'Colorful', 'Fun'] },
        { id: 118, name: 'Hide & Seek Play Station', category: 'playstations', image: '/products/hide & seek play station.jpg', price: '₹26,000', description: 'Interactive play station', features: ['Multiple activities', 'Safe', 'Engaging', 'Fun'] },
        { id: 119, name: 'New Play Station', category: 'playstations', image: '/products/new play station.jpg', price: '₹27,000', description: 'Modern play station', features: ['Latest design', 'Safe', 'Multiple activities', 'Durable'] },
        { id: 120, name: 'Play Junction Regular', category: 'playstations', image: '/products/play junction(regular).jpg', price: '₹20,000', description: 'Regular play junction', features: ['Standard size', 'Safe', 'Fun', 'Durable'] },
        { id: 121, name: 'Play Junction Small', category: 'playstations', image: '/products/play junction(small).jpg', price: '₹18,000', description: 'Compact play junction', features: ['Space-saving', 'Safe', 'Fun', 'Durable'] },
        { id: 122, name: 'Playland & Playpen', category: 'playstations', image: '/products/playland & playpen.jpg', price: '₹24,000', description: 'Combined playland', features: ['Multiple zones', 'Safe', 'Engaging', 'Fun'] },
        { id: 123, name: 'Playpen with Slide', category: 'playstations', image: '/products/playpen with slide.jpg', price: '₹21,000', description: 'Playpen with integrated slide', features: ['Safe enclosure', 'Fun slide', 'Colorful', 'Durable'] },
        { id: 124, name: 'Three in One Play Station', category: 'playstations', image: '/products/three in one  play station.jpg', price: '₹29,000', description: 'Triple activity station', features: ['3 activities', 'Safe', 'Engaging', 'Durable'] },
        { id: 125, name: 'Tomato Play House', category: 'playstations', image: '/products/tomato play house.jpg', price: '₹23,000', description: 'Tomato-shaped playhouse', features: ['Unique design', 'Safe', 'Imaginative play', 'Fun'] },
        { id: 126, name: 'Two in One Play Station', category: 'playstations', image: '/products/two in one play station.jpg', price: '₹25,000', description: 'Dual function play station', features: ['2 activities', 'Safe', 'Colorful', 'Durable'] },
        // More Furniture
        { id: 127, name: 'Baby Chair Senior', category: 'furniture', image: '/products/baby chair (senior).jpg', price: '₹1,800', description: 'Senior baby chair', features: ['Larger size', 'Safe', 'Comfortable', 'Durable'] },
        { id: 128, name: 'Baby Chair Small', category: 'furniture', image: '/products/baby chair (small).jpg', price: '₹1,200', description: 'Small baby chair', features: ['Compact', 'Safe', 'Colorful', 'Lightweight'] },
        { id: 129, name: 'Big Metal Chair', category: 'furniture', image: '/products/chair (big metal).jpg', price: '₹2,200', description: 'Large metal chair', features: ['Sturdy metal', 'Durable', 'Safe', 'Professional'] },
        { id: 130, name: 'Combined Metal Desk with Chair Webp', category: 'furniture', image: '/products/combined metal desk with chair.webp', price: '₹3,800', description: 'Metal desk-chair combo', features: ['Space-saving', 'Durable', 'Comfortable', 'Study-friendly'] },
        { id: 131, name: 'Dual Study Desk', category: 'furniture', image: '/products/dual study desk.jpg', price: '₹5,500', description: 'Two-student desk', features: ['Dual seating', 'Spacious', 'Durable', 'Study-friendly'] },
        { id: 132, name: 'Height Adjustable Desk', category: 'furniture', image: '/products/height adjustable desk.jpg', price: '₹4,200', description: 'Adjustable height desk', features: ['Height adjustable', 'Ergonomic', 'Durable', 'Versatile'] },
        { id: 133, name: 'Metal Desk with Plastic Top', category: 'furniture', image: '/products/metal desk with plastic top.jpg', price: '₹3,200', description: 'Metal frame desk', features: ['Durable metal', 'Easy clean top', 'Safe', 'Sturdy'] },
        { id: 134, name: 'Mini High Chair', category: 'furniture', image: '/products/mini high chair.jpg', price: '₹2,400', description: 'Compact high chair', features: ['Space-saving', 'Safe', 'Comfortable', 'Portable'] },
        { id: 135, name: 'Mono Desk Big', category: 'furniture', image: '/products/mono desk(big).jpg', price: '₹2,800', description: 'Large single desk', features: ['Spacious', 'Durable', 'Study-friendly', 'Safe'] },
        { id: 136, name: 'Mono Desk Small', category: 'furniture', image: '/products/mono desk(small).jpg', price: '₹2,200', description: 'Small single desk', features: ['Compact', 'Durable', 'Space-saving', 'Safe'] },
        { id: 137, name: 'Royal Desk with Plastic Chair', category: 'furniture', image: '/products/royal desk with plastic chair.webp', price: '₹4,000', description: 'Premium desk-chair set', features: ['Elegant design', 'Comfortable', 'Durable', 'Study-friendly'] },
        { id: 138, name: 'Big Metal Mesh Table with 2 Chairs', category: 'furniture', image: '/products/big metal mesh table with 2chairs.webp', price: '₹6,500', description: 'Table with 2 chairs', features: ['Complete set', 'Durable metal', 'Safe', 'Colorful'] },
        { id: 139, name: 'Big Metal Mesh Table with Bench', category: 'furniture', image: '/products/big metal mesh table with bench.webp', price: '₹6,000', description: 'Table with bench', features: ['Space-saving', 'Durable', 'Safe', 'Multi-seating'] },
        { id: 140, name: 'Double Metal Mesh Table with 2 Chairs', category: 'furniture', image: '/products/double metal mesh table with 2 chairs.jpg', price: '₹7,500', description: 'Double table set', features: ['Large capacity', 'Durable', 'Safe', 'Colorful'] },
        { id: 141, name: 'Fish Table', category: 'furniture', image: '/products/fish table.jpg', price: '₹4,200', description: 'Fish-shaped table', features: ['Fun design', 'Safe edges', 'Colorful', 'Durable'] },
        { id: 142, name: 'Regular Rectangle Table', category: 'furniture', image: '/products/regular rectangle shape table.jpg', price: '₹3,800', description: 'Standard rectangular table', features: ['Classic design', 'Durable', 'Safe', 'Versatile'] },
        { id: 143, name: 'Regular Table with Chair', category: 'furniture', image: '/products/rergular table with chair.jpg', price: '₹4,500', description: 'Table and chair set', features: ['Complete set', 'Durable', 'Safe', 'Colorful'] },
        { id: 144, name: 'Single Metal Mesh Table with Chair', category: 'furniture', image: '/products/single metal mesh table with chair.webp', price: '₹3,500', description: 'Single table-chair set', features: ['Compact', 'Durable metal', 'Safe', 'Study-friendly'] },
        { id: 145, name: 'Square Shape Table', category: 'furniture', image: '/products/square shape table.jpg', price: '₹3,600', description: 'Square activity table', features: ['Versatile shape', 'Safe edges', 'Durable', 'Colorful'] },
        { id: 146, name: 'Table with Bench', category: 'furniture', image: '/products/table with bencb.jpg', price: '₹5,200', description: 'Table with attached bench', features: ['Space-saving', 'Multi-seating', 'Durable', 'Safe'] },
        { id: 147, name: 'Tri Table with Chair', category: 'furniture', image: '/products/tri table with chair.jpg', price: '₹4,800', description: 'Triangular table set', features: ['Unique shape', 'Group activities', 'Safe', 'Colorful'] },
        // More Play Equipment
        { id: 148, name: 'Hen See Saw', category: 'playequip', image: '/products/hen see saw.jpg', price: '₹5,800', description: 'Hen-themed see-saw', features: ['Fun design', 'Safe', 'Smooth motion', 'Durable'] },
        { id: 149, name: 'Horse Merry Go Round', category: 'playequip', image: '/products/horse merry go round.jpg', price: '₹13,000', description: 'Horse carousel', features: ['Multiple horses', 'Safe rotation', 'Fun', 'Durable'] },
        { id: 150, name: 'Triangle See Saw', category: 'playequip', image: '/products/triangle see saw.webp', price: '₹6,200', description: 'Three-way see-saw', features: ['3 seats', 'Safe', 'Fun', 'Unique design'] },
        { id: 151, name: 'Giraffe Double Swing cum Basketball', category: 'playequip', image: '/products/giraffe double swing cum basket ball.jpg', price: '₹16,000', description: 'Swing and basketball combo', features: ['Multi-function', 'Safe', 'Fun', 'Engaging'] },
        { id: 152, name: 'Goal Post', category: 'playequip', image: '/products/goal post.jpg', price: '₹7,500', description: 'Football goal post', features: ['Sports play', 'Durable', 'Safe', 'Fun'] },
        { id: 153, name: 'Happy Swing', category: 'playequip', image: '/products/happy swing.jpg', price: '₹4,500', description: 'Cheerful swing set', features: ['Safe design', 'Fun', 'Colorful', 'Durable'] },
        { id: 154, name: 'Hurdles', category: 'playequip', image: '/products/hurdles.jpg', price: '₹3,800', description: 'Obstacle hurdles', features: ['Physical activity', 'Safe', 'Educational', 'Fun'] },
        { id: 155, name: 'Pour a Ring', category: 'playequip', image: '/products/pour a ring.jpg', price: '₹5,200', description: 'Ring toss game', features: ['Skill development', 'Safe', 'Fun', 'Engaging'] },
        { id: 156, name: 'Roller Coaster', category: 'playequip', image: '/products/roller coster.webp', price: '₹18,000', description: 'Mini roller coaster', features: ['Exciting ride', 'Safe', 'Fun', 'Durable'] },
        { id: 157, name: 'Super Merry Go Round with Roof', category: 'playequip', image: '/products/super merry go round(with roof).jpg', price: '₹14,500', description: 'Covered merry-go-round', features: ['Weather protection', 'Safe', 'Fun', 'Durable'] },
        { id: 158, name: 'U.D.Cra', category: 'playequip', image: '/products/U.D.Cra.webp', price: '₹9,500', description: 'Climbing equipment', features: ['Physical development', 'Safe', 'Challenging', 'Durable'] },
        // More Storage
        { id: 159, name: 'Bunny Dustbin', category: 'storage', image: '/products/bunny dustbin.jpg', price: '₹1,800', description: 'Bunny-shaped dustbin', features: ['Cute design', 'Easy clean', 'Durable', 'Colorful'] },
        { id: 160, name: 'Capsicum Book Stand', category: 'storage', image: '/products/capsicum book stand.jpg', price: '₹2,800', description: 'Vegetable-themed book stand', features: ['Fun design', 'Multiple shelves', 'Safe', 'Colorful'] },
        { id: 161, name: 'Clown Dustbin', category: 'storage', image: '/products/clown dustbin.jpg', price: '₹1,900', description: 'Clown-shaped dustbin', features: ['Fun design', 'Easy clean', 'Durable', 'Colorful'] },
        { id: 162, name: 'Joker Dustbin', category: 'storage', image: '/products/joker dustbin.jpg', price: '₹1,900', description: 'Joker-themed dustbin', features: ['Colorful design', 'Easy clean', 'Durable', 'Fun'] },
        { id: 163, name: 'Monkey Dustbin', category: 'storage', image: '/products/monkey dustbin.jpg', price: '₹1,850', description: 'Monkey-shaped dustbin', features: ['Cute design', 'Easy clean', 'Durable', 'Fun'] },
        { id: 164, name: 'Multi Colour Book Stand', category: 'storage', image: '/products/multi colour book stand.jpg', price: '₹2,600', description: 'Colorful book organizer', features: ['Vibrant colors', 'Multiple shelves', 'Safe', 'Organized'] },
        { id: 165, name: 'Swan Dustbin', category: 'storage', image: '/products/swan dustbin.jpg', price: '₹2,000', description: 'Swan-shaped dustbin', features: ['Elegant design', 'Easy clean', 'Durable', 'Decorative'] },
        { id: 166, name: 'Towel and Water Bottle Holder', category: 'storage', image: '/products/towel and water bottle holde.jpg', price: '₹2,200', description: 'Multi-purpose holder', features: ['Dual function', 'Organized', 'Durable', 'Convenient'] },
        // More Baby Products
        { id: 167, name: 'Baby Aeroplane Car with Music & Lights', category: 'baby', image: '/products/baby aeroplane car with music & lights.jpg', price: '₹3,800', description: 'Musical aeroplane car', features: ['Music & lights', 'Safe', 'Fun', 'Interactive'] },
        { id: 168, name: 'Baby Basketball & Dart Board 2 in 1', category: 'baby', image: '/products/baby basket ball & dart board(2 in 1).jpg', price: '₹2,500', description: 'Dual sports game', features: ['2-in-1', 'Safe', 'Skill development', 'Fun'] },
        { id: 169, name: 'Baby Big Panda Car', category: 'baby', image: '/products/baby big panda cara.webp', price: '₹3,500', description: 'Panda ride-on car', features: ['Cute design', 'Safe', 'Fun', 'Durable'] },
        { id: 170, name: 'Baby Caliber Car', category: 'baby', image: '/products/baby caliber car.jpg', price: '₹2,900', description: 'Caliber ride-on car', features: ['Stylish design', 'Safe', 'Fun', 'Durable'] },
        { id: 171, name: 'Baby Go Car SFX', category: 'baby', image: '/products/baby go car(sfx).jpg', price: '₹3,200', description: 'Sound effects car', features: ['Sound effects', 'Safe', 'Fun', 'Interactive'] },
        { id: 172, name: 'Baby Panda Car', category: 'baby', image: '/products/baby panda car.jpg', price: '₹2,700', description: 'Panda-themed car', features: ['Cute design', 'Safe', 'Fun', 'Colorful'] },
        { id: 173, name: 'Baby Rocket Car Senior', category: 'baby', image: '/products/baby rocket car(sr.).webp', price: '₹3,600', description: 'Senior rocket car', features: ['Larger size', 'Safe', 'Fun', 'Durable'] },
        { id: 174, name: 'Baby Sports Car', category: 'baby', image: '/products/baby sports car.jpg', price: '₹3,100', description: 'Sports car ride-on', features: ['Sporty design', 'Safe', 'Fun', 'Stylish'] },
        { id: 175, name: 'Baby Teddy Car', category: 'baby', image: '/products/baby teddy car.jpg', price: '₹2,600', description: 'Teddy bear car', features: ['Cute design', 'Safe', 'Fun', 'Soft'] },
        { id: 176, name: 'Baby Twist Car Deluxe', category: 'baby', image: '/products/baby twist car(dlx).webp', price: '₹3,000', description: 'Deluxe twist car', features: ['Premium design', 'Safe', 'Fun', 'Durable'] },
        { id: 177, name: 'Baby Vintage Car Junior', category: 'baby', image: '/products/baby vintage car(jr).webp', price: '₹3,400', description: 'Vintage style car', features: ['Classic design', 'Safe', 'Fun', 'Stylish'] },
        { id: 178, name: 'Ball Pool Hexa', category: 'baby', image: '/products/ball pool (hexa).jpg', price: '₹9,500', description: 'Hexagonal ball pool', features: ['Unique shape', 'Safe', 'Includes balls', 'Fun'] },
        { id: 179, name: 'Ball Pool SFX', category: 'baby', image: '/products/ball pool(sfx).webp', price: '₹10,500', description: 'Ball pool with effects', features: ['Special effects', 'Safe', 'Includes balls', 'Fun'] },
        { id: 180, name: 'Big Blocks', category: 'baby', image: '/products/big blocks.jpg', price: '₹2,200', description: 'Large building blocks', features: ['Safe size', 'Educational', 'Colorful', 'Creative play'] },
        { id: 181, name: 'Bricks', category: 'baby', image: '/products/bricks.jpg', price: '₹1,800', description: 'Building bricks set', features: ['Educational', 'Safe', 'Colorful', 'Creative'] },
        { id: 182, name: 'Regular Fencing', category: 'baby', image: '/products/regular fencing.jpg', price: '₹4,500', description: 'Safety fencing', features: ['Safe enclosure', 'Durable', 'Easy assembly', 'Protective'] },
        { id: 183, name: 'Sand Box cum Pool', category: 'baby', image: '/products/sand box cum pool.jpg', price: '₹6,500', description: 'Dual purpose sandbox', features: ['2-in-1', 'Safe', 'Fun', 'Versatile'] },
        { id: 184, name: 'School Bus', category: 'baby', image: '/products/school bus.jpg', price: '₹5,200', description: 'School bus toy', features: ['Imaginative play', 'Safe', 'Colorful', 'Fun'] },
        { id: 185, name: 'Star Fencing', category: 'baby', image: '/products/star fencing.jpg', price: '₹5,000', description: 'Star-shaped fencing', features: ['Decorative', 'Safe', 'Durable', 'Colorful'] },
        { id: 186, name: 'Train', category: 'baby', image: '/products/train.jpg', price: '₹4,800', description: 'Train ride-on toy', features: ['Fun design', 'Safe', 'Imaginative play', 'Durable'] },
        { id: 187, name: 'Tunnel', category: 'baby', image: '/products/tunnel.jpg', price: '₹3,500', description: 'Play tunnel', features: ['Crawl-through', 'Safe', 'Fun', 'Active play'] },
        // Scientific Equipment
        { id: 188, name: 'Aerial Insect Trap', category: 'scientific', image: '/products/aerial insect trap.jpg', price: '₹4,500', description: 'Aerial insect collection trap', features: ['Effective design', 'Durable', 'Easy to use', 'Research grade'] },
        { id: 189, name: 'Aquatic Net', category: 'scientific', image: '/products/aquatic net.jpg', price: '₹2,800', description: 'Aquatic specimen collection net', features: ['Fine mesh', 'Durable handle', 'Research quality', 'Easy to clean'] },
        { id: 190, name: 'Box for Glass Specimen Tubes', category: 'scientific', image: '/products/box forglass specimen tubes.jpg', price: '₹3,200', description: 'Storage box for specimen tubes', features: ['Organized storage', 'Protective', 'Durable', 'Multiple compartments'] },
        { id: 191, name: 'Breeding Nest for Flies', category: 'scientific', image: '/products/breeding nest for files.jpg', price: '₹5,500', description: 'Fly breeding container', features: ['Controlled environment', 'Easy maintenance', 'Research grade', 'Durable'] },
        { id: 192, name: 'Brown Plant Hopper Insect Rearing Cage', category: 'scientific', image: '/products/brown plant hopper insect rearing cag.png', price: '₹6,800', description: 'Specialized rearing cage', features: ['Optimal ventilation', 'Easy access', 'Research quality', 'Durable construction'] },
        { id: 193, name: 'Corcyra Cage Breeding Nest for Chrysopa', category: 'scientific', image: '/products/corcyra cagbreeding nest for chrysopa.jpg', price: '₹7,200', description: 'Chrysopa breeding system', features: ['Specialized design', 'Easy maintenance', 'Research grade', 'Effective'] },
        { id: 194, name: 'Corcyra Cage Waterproof Plywood', category: 'scientific', image: '/products/corcyra cage(waterproof playwood).jpg', price: '₹8,500', description: 'Waterproof breeding cage', features: ['Weather resistant', 'Durable plywood', 'Easy to clean', 'Long-lasting'] },
        { id: 195, name: 'Corcyra Cage', category: 'scientific', image: '/products/corcyra cage.jpg', price: '₹6,500', description: 'Standard corcyra cage', features: ['Effective design', 'Easy maintenance', 'Research quality', 'Durable'] },
        { id: 196, name: 'Corcyra Egg Sterilization Chamber', category: 'scientific', image: '/products/corcyra egg sterlization chamber.jpg', price: '₹12,000', description: 'Egg sterilization equipment', features: ['Precise control', 'Effective sterilization', 'Research grade', 'Safe operation'] },
        { id: 197, name: 'Corcyra Rearing System', category: 'scientific', image: '/products/corcyra rearing system.png', price: '₹15,000', description: 'Complete rearing system', features: ['Comprehensive setup', 'Easy to use', 'Research quality', 'Efficient'] },
        { id: 198, name: 'Entomological Pins', category: 'scientific', image: '/products/entomological pins.jpg', price: '₹1,200', description: 'Insect specimen pins', features: ['Various sizes', 'Rust-resistant', 'Professional quality', 'Precise'] },
        { id: 199, name: 'Green Leaf Hopper Insect Rearing Cage', category: 'scientific', image: '/products/green leaf hopper insect rearing cage.jpg', price: '₹6,200', description: 'Leaf hopper rearing cage', features: ['Specialized design', 'Good ventilation', 'Research quality', 'Durable'] },
        { id: 200, name: 'Insect Cages', category: 'scientific', image: '/products/insect cages.jpg', price: '₹4,800', description: 'General insect cages', features: ['Versatile use', 'Easy access', 'Durable', 'Research quality'] },
        { id: 201, name: 'Insect Collecting Net with AI Handle', category: 'scientific', image: '/products/insect collecting net with AI.handle.jpg', price: '₹3,500', description: 'Professional collecting net', features: ['Aluminum handle', 'Fine mesh', 'Lightweight', 'Durable'] },
        { id: 202, name: 'Insect Light Trap Barles Type', category: 'scientific', image: '/products/insect light trap(barles type).webp', price: '₹8,500', description: 'Barles type light trap', features: ['Effective attraction', 'Durable', 'Research grade', 'Easy to use'] },
        { id: 203, name: 'Insect Light Trap', category: 'scientific', image: '/products/insect light trap.jpg', price: '₹7,500', description: 'Standard light trap', features: ['Effective design', 'Durable', 'Easy maintenance', 'Research quality'] },
        { id: 204, name: 'Insect Showcase Cabinet Large', category: 'scientific', image: '/products/insect showcase cabinet(large).jpg', price: '₹18,000', description: 'Large display cabinet', features: ['Spacious', 'Protective glass', 'Professional display', 'Durable'] },
        { id: 205, name: 'Insect Specimen Tube Box', category: 'scientific', image: '/products/insect specimen tube box.webp', price: '₹2,800', description: 'Specimen tube storage', features: ['Organized storage', 'Protective', 'Compact', 'Durable'] },
        { id: 206, name: 'Insect Storage Box', category: 'scientific', image: '/products/insect storage box.webp', price: '₹4,200', description: 'Insect specimen storage', features: ['Secure storage', 'Protective', 'Organized', 'Durable'] },
        { id: 207, name: 'Light Trap for Moth with Mercury Bulb', category: 'scientific', image: '/products/light trap for moth(with mercury bulb).jpg', price: '₹9,500', description: 'Mercury bulb moth trap', features: ['High attraction', 'Effective', 'Research grade', 'Durable'] },
        { id: 208, name: 'Magnascope Bench Magnifier', category: 'scientific', image: '/products/magnascope(bench magnifier).jpg', price: '₹6,800', description: 'Bench magnification system', features: ['Clear magnification', 'Adjustable', 'Professional quality', 'Durable'] },
        { id: 209, name: 'Rat & Mosquito Cage', category: 'scientific', image: '/products/rat & mosquito cage.jpg', price: '₹5,500', description: 'Multi-purpose research cage', features: ['Versatile design', 'Secure', 'Easy maintenance', 'Durable'] },
    ];

    const categories = [
        { id: 'all', name: 'All Products', emoji: '📦' },
        { id: 'boards', name: 'Boards', emoji: '📋' },
        { id: 'presentation', name: 'Presentation', emoji: '🎤' },
        { id: 'displays', name: 'Displays', emoji: '📊' },
        { id: 'stands', name: 'Stands', emoji: '🗂️' },
        { id: 'systems', name: 'Display Systems', emoji: '🖼️' },
        { id: 'slides', name: 'Slides', emoji: '🛝' },
        { id: 'rockers', name: 'Rockers & Riders', emoji: '🐴' },
        { id: 'playstations', name: 'Play Stations', emoji: '🎪' },
        { id: 'furniture', name: 'Furniture', emoji: '🪑' },
        { id: 'playequip', name: 'Play Equipment', emoji: '⚽' },
        { id: 'storage', name: 'Storage', emoji: '📚' },
        { id: 'baby', name: 'Baby Products', emoji: '👶' },
        { id: 'scientific', name: 'Scientific Equipment', emoji: '🔬' },
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleBuyWhatsApp = (productName) => {
        const message = `Hi, I'm interested in buying ${productName}. Please provide more details.`;
        const whatsappUrl = `https://wa.me/919842250600?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section - Glossy Blue */}
            <section className="glossy-blue text-white py-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">Our Products</h1>
                    <p className="text-lg text-blue-100 mb-6">Quality office solutions • {products.length} Products Available</p>
                    <a
                        href={pamphletPDF}
                        download="City-Office-Needs-Chair-Pamphlet.pdf"
                        className="btn-glossy-gold text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2"
                    >
                        <Download size={22} />
                        Download Pamphlet
                    </a>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-4 glass relative z-40 border-b-2 border-white/30 shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible w-full md:w-auto justify-start md:justify-center gap-3 pb-2 md:pb-0 no-scrollbar px-1">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-5 py-2.5 rounded-xl font-bold transition-all duration-200 text-sm whitespace-nowrap flex-shrink-0 ${activeCategory === category.id
                                        ? 'btn-glossy-blue text-white'
                                        : 'bg-white/80 text-blue-900 hover:bg-white border-2 border-blue-200'
                                        }`}
                                >
                                    <span className="mr-1">{category.emoji}</span>
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <div className="mb-6">
                        <p className="text-blue-900 font-semibold">Showing {filteredProducts.length} products</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.02 }}
                                className="premium-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 h-48">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                        <span className="text-white font-bold text-sm bg-blue-600/80 px-4 py-2 rounded-full backdrop-blur-sm">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 bg-white/60 backdrop-blur-sm">
                                    <h3 className="font-bold text-sm mb-1 text-blue-900 line-clamp-2 h-10">
                                        {product.name}
                                    </h3>
                                    <p className="text-glossy-gold font-bold text-lg">{product.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Detail Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-blue-900/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="premium-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 glossy-white border-b-2 border-amber-200 p-5 flex justify-between items-center z-10">
                                <h2 className="text-2xl font-bold text-glossy-blue">{selectedProduct.name}</h2>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="p-2 hover:bg-blue-100 rounded-full transition-colors text-blue-900"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 flex items-center justify-center border-2 border-blue-100">
                                        <img
                                            src={selectedProduct.image}
                                            alt={selectedProduct.name}
                                            className="max-w-full max-h-96 object-contain drop-shadow-lg"
                                        />
                                    </div>

                                    <div>
                                        <div className="mb-6">
                                            <p className="text-4xl font-bold text-glossy-gold mb-3">{selectedProduct.price}</p>
                                            <p className="text-blue-800 text-lg">{selectedProduct.description}</p>
                                        </div>

                                        <div className="mb-6">
                                            <h3 className="text-xl font-bold text-blue-900 mb-4">Key Features</h3>
                                            <ul className="space-y-3">
                                                {selectedProduct.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="text-amber-500 mt-1 text-xl">✓</span>
                                                        <span className="text-blue-900 font-medium">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => handleBuyWhatsApp(selectedProduct.name)}
                                                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                                            >
                                                <MessageCircle size={22} />
                                                Buy via WhatsApp
                                            </button>
                                            <a
                                                href="/contact"
                                                className="flex-1 btn-glossy-blue text-white px-6 py-4 rounded-2xl font-bold text-center"
                                            >
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Section */}
            <section className="glossy-white py-12 border-t-2 border-amber-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-glossy-blue mb-3">Need a Custom Solution?</h2>
                    <p className="text-blue-800 mb-6 text-lg">Contact us for personalized quotes and bulk orders</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/contact"
                            className="btn-glossy-blue text-white px-8 py-4 rounded-2xl font-bold inline-block"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="tel:+919842250600"
                            className="btn-glossy-gold text-white px-8 py-4 rounded-2xl font-bold inline-block"
                        >
                            📞 Call Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
