// Mock Product Data
const mockProducts = [
    { barcode: "20158", name: "Seclo 20mg Cap", stock: 1200, costPrice: 4.50, price: 5.00, category: "Capsule", subCategory: "Omeprazole", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20159", name: "Fexo 120mg Tab", stock: 850, costPrice: 7.20, price: 8.00, category: "Tablet", subCategory: "Fexofenadine", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20160", name: "Alatrol 10mg Tab", stock: 1500, costPrice: 2.70, price: 3.00, category: "Tablet", subCategory: "Cetirizine", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20161", name: "Calbo D Tab", stock: 650, costPrice: 6.50, price: 7.50, category: "Tablet", subCategory: "Calcium + Vitamin D3", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20162", name: "Zimax 500mg Tab", stock: 320, costPrice: 30.00, price: 35.00, category: "Tablet", subCategory: "Azithromycin", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20163", name: "Cef-3 200mg Cap", stock: 400, costPrice: 30.00, price: 35.00, category: "Capsule", subCategory: "Cefixime", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20164", name: "Neuro-B Tab", stock: 950, costPrice: 4.50, price: 5.50, category: "Tablet", subCategory: "Vitamin B Complex", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20165", name: "Comet 500mg Tab", stock: 1100, costPrice: 2.50, price: 3.50, category: "Tablet", subCategory: "Metformin", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20166", name: "Rosuva 10mg Tab", stock: 550, costPrice: 18.00, price: 20.00, category: "Tablet", subCategory: "Rosuvastatin", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20167", name: "Vigorex 50mg Tab", stock: 250, costPrice: 13.50, price: 15.00, category: "Tablet", subCategory: "Sildenafil", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20168", name: "Angilock 50mg Tab", stock: 600, costPrice: 8.00, price: 9.00, category: "Tablet", subCategory: "Losartan", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20169", name: "Moxaclav 625mg Tab", stock: 300, costPrice: 26.00, price: 30.00, category: "Tablet", subCategory: "Amoxicillin + Clavulanic Acid", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20170", name: "Bicozin Cap", stock: 750, costPrice: 4.50, price: 5.50, category: "Capsule", subCategory: "B-Complex + Zinc", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20171", name: "Amodis 400mg Tab", stock: 900, costPrice: 1.50, price: 2.00, category: "Tablet", subCategory: "Metronidazole", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20172", name: "Bactrocin 15g Ointment", stock: 150, costPrice: 110.00, price: 125.00, category: "Ointment", subCategory: "Mupirocin", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20173", name: "Fungidal-HC Cream", stock: 220, costPrice: 40.00, price: 45.00, category: "Cream", subCategory: "Miconazole + Hydrocortisone", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20174", name: "Nexum MUPS 20mg Tab", stock: 480, costPrice: 8.00, price: 9.00, category: "Tablet", subCategory: "Esomeprazole", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20175", name: "Adovas 100ml Syrup", stock: 350, costPrice: 60.00, price: 65.00, category: "Syrup", subCategory: "Herbal Cough Expectorant", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20176", name: "Ambrox 15mg/5ml Syrup", stock: 400, costPrice: 40.00, price: 45.00, category: "Syrup", subCategory: "Ambroxol", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20177", name: "Afun 1% Cream", stock: 320, costPrice: 30.00, price: 35.00, category: "Cream", subCategory: "Clotrimazole", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20178", name: "Flacol 40mg/ml Drop", stock: 280, costPrice: 30.00, price: 35.00, category: "Drop", subCategory: "Simethicone", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20179", name: "Thyrin 50mcg Tab", stock: 450, costPrice: 1.50, price: 2.00, category: "Tablet", subCategory: "Levothyroxine", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20180", name: "Gynepro Vaginal Suppository", stock: 120, costPrice: 12.00, price: 15.00, category: "Suppository", subCategory: "Povidone Iodine", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20181", name: "Flonaspray Max Nasal Spray", stock: 90, costPrice: 260.00, price: 300.00, category: "Nasal Spray", subCategory: "Fluticasone", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20182", name: "Vori 200mg IV Injection", stock: 40, costPrice: 1800.00, price: 2000.00, category: "Injection", subCategory: "Voriconazole", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20183", name: "Napa 500mg Tab", stock: 2500, costPrice: 0.60, price: 0.80, category: "Tablet", subCategory: "Paracetamol", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20184", name: "Napa Extend 665mg Tab", stock: 1800, costPrice: 1.20, price: 1.50, category: "Tablet", subCategory: "Paracetamol", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20185", name: "D-Rise 40000 IU Cap", stock: 350, costPrice: 40.00, price: 45.00, category: "Capsule", subCategory: "Cholecalciferol", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20186", name: "Bizoran 5/20 Tab", stock: 420, costPrice: 12.00, price: 14.00, category: "Tablet", subCategory: "Amlodipine + Olmesartan", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20187", name: "Atova 10mg Tab", stock: 680, costPrice: 10.00, price: 12.00, category: "Tablet", subCategory: "Atorvastatin", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20188", name: "Amdocal 5mg Tab", stock: 800, costPrice: 4.50, price: 5.00, category: "Tablet", subCategory: "Amlodipine", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20189", name: "Olmesan 20mg Tab", stock: 500, costPrice: 6.00, price: 7.00, category: "Tablet", subCategory: "Olmesartan", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20190", name: "Tofen 1mg Tab", stock: 750, costPrice: 2.50, price: 3.00, category: "Tablet", subCategory: "Ketotifen", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20191", name: "Azmasol Inhaler", stock: 180, costPrice: 200.00, price: 220.00, category: "Inhaler", subCategory: "Salbutamol", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20192", name: "Bextram Gold Tab", stock: 550, costPrice: 5.50, price: 6.50, category: "Tablet", subCategory: "Multivitamin & Multimineral", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20193", name: "Deflux 10mg Tab", stock: 900, costPrice: 2.50, price: 3.50, category: "Tablet", subCategory: "Domperidone", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20194", name: "Frenxit Tab", stock: 450, costPrice: 6.00, price: 7.00, category: "Tablet", subCategory: "Flupentixol + Melitracen", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20195", name: "Hemofix FZ Cap", stock: 620, costPrice: 4.50, price: 5.50, category: "Capsule", subCategory: "Iron + Folic Acid + Zinc", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20196", name: "REMMO 20mg Tab", stock: 500, costPrice: 6.00, price: 7.00, category: "Tablet", subCategory: "Esomeprazole MUPS", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20197", name: "Neofloxin 500mg Tab", stock: 380, costPrice: 12.50, price: 15.00, category: "Tablet", subCategory: "Ciprofloxacin", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20198", name: "Tyclav 625mg Tab", stock: 240, costPrice: 26.00, price: 30.00, category: "Tablet", subCategory: "Amoxicillin + Clavulanic Acid", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20199", name: "Relentus 2mg Tab", stock: 300, costPrice: 4.50, price: 5.50, category: "Tablet", subCategory: "Tizanidine", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20200", name: "Zopride 50mg Tab", stock: 400, costPrice: 5.00, price: 6.00, category: "Tablet", subCategory: "Itopride", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20201", name: "NaSal 0.9% Drop", stock: 500, costPrice: 20.00, price: 25.00, category: "Drop", subCategory: "Sodium Chloride", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20202", name: "Bactrobex 2% Ointment", stock: 150, costPrice: 125.00, price: 140.00, category: "Ointment", subCategory: "Mupirocin", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20203", name: "Zeptide 5 SC Injection", stock: 30, costPrice: 2400.00, price: 2700.00, category: "Injection", subCategory: "Tirzepatide", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20204", name: "Napa 500 Suppository", stock: 200, costPrice: 3.50, price: 5.00, category: "Suppository", subCategory: "Paracetamol", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20205", name: "Vintelix 5mg Tab", stock: 180, costPrice: 13.00, price: 15.00, category: "Tablet", subCategory: "Vortioxetine", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20206", name: "Bilexa 100/25 Bexicap", stock: 250, costPrice: 6.00, price: 7.50, category: "Capsule", subCategory: "Budesonide + Formoterol", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20207", name: "Aeronid 0.5mg/2ml Suspension", stock: 120, costPrice: 25.00, price: 30.00, category: "Suspension", subCategory: "Budesonide", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20108", name: "Napa 500mg Tab", stock: 800, costPrice: 0.60, price: 0.80, category: "Tablet", subCategory: "Paracetamol", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20109", name: "Seclo 20mg Cap", stock: 450, costPrice: 4.50, price: 5.00, category: "Capsule", subCategory: "Omeprazole", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20110", name: "Sergel 20mg Cap", stock: 600, costPrice: 6.20, price: 7.00, category: "Capsule", subCategory: "Esomeprazole", minorCategory: "Healthcare Pharmaceuticals Ltd." },
    { barcode: "20111", name: "Maxpro 20mg Tab", stock: 550, costPrice: 6.00, price: 7.00, category: "Tablet", subCategory: "Esomeprazole", minorCategory: "Renata Limited" },
    { barcode: "20112", name: "Pantonix 20mg Tab", stock: 400, costPrice: 5.50, price: 7.00, category: "Tablet", subCategory: "Pantoprazole", minorCategory: "Incepta Pharmaceuticals Ltd." },
    { barcode: "20113", name: "Ace 500mg Tab", stock: 750, costPrice: 0.65, price: 0.80, category: "Tablet", subCategory: "Paracetamol", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20114", name: "Cef-3 200mg Cap", stock: 200, costPrice: 30.00, price: 35.00, category: "Capsule", subCategory: "Cefixime", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20115", name: "Monas 10mg Tab", stock: 350, costPrice: 15.50, price: 17.50, category: "Tablet", subCategory: "Montelukast", minorCategory: "The ACME Laboratories Ltd." },
    { barcode: "20116", name: "Fexo 120mg Tab", stock: 420, costPrice: 7.00, price: 8.00, category: "Tablet", subCategory: "Fexofenadine", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20117", name: "Losectil 20mg Cap", stock: 380, costPrice: 4.50, price: 5.00, category: "Capsule", subCategory: "Omeprazole", minorCategory: "Eskayef Pharmaceuticals Ltd." },
    { barcode: "20118", name: "Zithrox 500mg Tab", stock: 150, costPrice: 30.00, price: 35.00, category: "Tablet", subCategory: "Azithromycin", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20119", name: "Ciprocin 500mg Tab", stock: 300, costPrice: 12.00, price: 15.00, category: "Tablet", subCategory: "Ciprofloxacin", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20120", name: "Alatrol 10mg Tab", stock: 500, costPrice: 2.50, price: 3.00, category: "Tablet", subCategory: "Cetirizine", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20121", name: "Deslor 5mg Tab", stock: 450, costPrice: 3.50, price: 4.50, category: "Tablet", subCategory: "Desloratadine", minorCategory: "Incepta Pharmaceuticals Ltd." },
    { barcode: "20122", name: "Cometo 500mg Tab", stock: 600, costPrice: 2.50, price: 3.50, category: "Tablet", subCategory: "Metformin", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20123", name: "Napa Extra 500/65mg Tab", stock: 700, costPrice: 2.00, price: 2.50, category: "Tablet", subCategory: "Paracetamol + Caffeine", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20124", name: "Calbo D Tab", stock: 400, costPrice: 6.50, price: 7.50, category: "Tablet", subCategory: "Calcium + Vitamin D3", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20125", name: "Orsaline-N 10g Sachet", stock: 1000, costPrice: 4.50, price: 5.00, category: "Powder", subCategory: "Oral Rehydration Salts", minorCategory: "SMC Enterprise Ltd." },
    { barcode: "20126", name: "Bextram Gold Tab", stock: 250, costPrice: 5.50, price: 6.50, category: "Tablet", subCategory: "Multivitamin", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20127", name: "Neofloxin 500mg Tab", stock: 280, costPrice: 12.50, price: 15.00, category: "Tablet", subCategory: "Ciprofloxacin", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20128", name: "E-cap 400 IU Cap", stock: 400, costPrice: 5.00, price: 6.50, category: "Capsule", subCategory: "Vitamin E", minorCategory: "Drug International Ltd." },
    { barcode: "20129", name: "Coralcal-D Tab", stock: 320, costPrice: 9.00, price: 10.00, category: "Tablet", subCategory: "Calcium + Vitamin D3", minorCategory: "Radiant Pharmaceuticals Ltd." },
    { barcode: "20130", name: "Xinc 20mg Tab", stock: 500, costPrice: 1.50, price: 2.00, category: "Tablet", subCategory: "Zinc Sulfate", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20131", name: "Azith 500mg Tab", stock: 180, costPrice: 30.00, price: 35.00, category: "Tablet", subCategory: "Azithromycin", minorCategory: "Incepta Pharmaceuticals Ltd." },
    { barcode: "20132", name: "Tufnil 200mg Tab", stock: 300, costPrice: 6.50, price: 8.00, category: "Tablet", subCategory: "Tolfenamic Acid", minorCategory: "Eskayef Pharmaceuticals Ltd." },
    { barcode: "20133", name: "Rostab 10mg Tab", stock: 220, costPrice: 18.00, price: 20.00, category: "Tablet", subCategory: "Rosuvastatin", minorCategory: "Incepta Pharmaceuticals Ltd." },
    { barcode: "20134", name: "Angilock 50mg Tab", stock: 350, costPrice: 6.50, price: 8.00, category: "Tablet", subCategory: "Losartan", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20135", name: "Tenocab 50mg Tab", stock: 300, costPrice: 3.50, price: 4.00, category: "Tablet", subCategory: "Atenolol", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20136", name: "Neuro-B Tab", stock: 500, costPrice: 4.50, price: 5.50, category: "Tablet", subCategory: "Vitamin B Complex", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20137", name: "Ecosprin 75mg Tab", stock: 650, costPrice: 0.60, price: 0.80, category: "Tablet", subCategory: "Aspirin", minorCategory: "The ACME Laboratories Ltd." },
    { barcode: "20138", name: "Entacyd Plus Susp", stock: 120, costPrice: 65.00, price: 75.00, category: "Suspension", subCategory: "Antacid", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20139", name: "Moxacil 500mg Cap", stock: 280, costPrice: 6.50, price: 7.50, category: "Capsule", subCategory: "Amoxicillin", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20140", name: "Filmet 400mg Tab", stock: 400, costPrice: 1.20, price: 1.50, category: "Tablet", subCategory: "Metronidazole", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20141", name: "Omidon 10mg Tab", stock: 600, costPrice: 2.20, price: 2.80, category: "Tablet", subCategory: "Domperidone", minorCategory: "Incepta Pharmaceuticals Ltd." },
    { barcode: "20142", name: "Pevitin 15g Cream", stock: 80, costPrice: 35.00, price: 40.00, category: "Cream", subCategory: "Povidone Iodine", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20143", name: "Provair 10mg Tab", stock: 350, costPrice: 15.00, price: 17.50, category: "Tablet", subCategory: "Montelukast", minorCategory: "Incepta Pharmaceuticals Ltd." },
    { barcode: "20144", name: "Furotil 250mg Tab", stock: 150, costPrice: 35.00, price: 40.00, category: "Tablet", subCategory: "Cefuroxime", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20145", name: "Bizoran 5/20 Tab", stock: 200, costPrice: 12.00, price: 14.00, category: "Tablet", subCategory: "Amlodipine + Olmesartan", minorCategory: "Incepta Pharmaceuticals Ltd." },
    { barcode: "20146", name: "Rivotril 0.5mg Tab", stock: 300, costPrice: 6.50, price: 8.00, category: "Tablet", subCategory: "Clonazepam", minorCategory: "Radiant Pharmaceuticals Ltd." },
    { barcode: "20147", name: "Finix 20mg Tab", stock: 450, costPrice: 6.00, price: 7.00, category: "Tablet", subCategory: "Rabeprazole", minorCategory: "Opsonin Pharma Ltd." },
    { barcode: "20148", name: "Atova 10mg Tab", stock: 380, costPrice: 10.00, price: 12.00, category: "Tablet", subCategory: "Atorvastatin", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20149", name: "Glimy 1mg Tab", stock: 400, costPrice: 4.50, price: 5.00, category: "Tablet", subCategory: "Glimepiride", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20150", name: "Nofel 20mg Tab", stock: 250, costPrice: 1.80, price: 2.20, category: "Tablet", subCategory: "Famotidine", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20151", name: "Ceevit 250mg Tab", stock: 800, costPrice: 1.50, price: 1.80, category: "Tablet", subCategory: "Vitamin C", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20152", name: "Myolax 50mg Tab", stock: 200, costPrice: 8.50, price: 10.00, category: "Tablet", subCategory: "Eperisone", minorCategory: "Incepta Pharmaceuticals Ltd." },
    { barcode: "20153", name: "Tycil 500mg Cap", stock: 320, costPrice: 6.80, price: 8.00, category: "Capsule", subCategory: "Amoxicillin", minorCategory: "Beximco Pharmaceuticals Ltd." },
    { barcode: "20154", name: "Exium 20mg Cap", stock: 350, costPrice: 6.00, price: 7.00, category: "Capsule", subCategory: "Esomeprazole", minorCategory: "Radiant Pharmaceuticals Ltd." },
    { barcode: "20155", name: "Mytus 50ml Syrup", stock: 150, costPrice: 40.00, price: 48.00, category: "Syrup", subCategory: "Dextromethorphan", minorCategory: "Incepta Pharmaceuticals Ltd." },
    { barcode: "20156", name: "Odmon 10mg Tab", stock: 280, costPrice: 15.00, price: 17.50, category: "Tablet", subCategory: "Montelukast", minorCategory: "Square Pharmaceuticals Ltd." },
    { barcode: "20157", name: "Motigut 10mg Tab", stock: 350, costPrice: 2.00, price: 2.50, category: "Tablet", subCategory: "Domperidone", minorCategory: "Square Pharmaceuticals Ltd." }
];

// State variables
let invoiceItems = [];
let searchDebounceTimeout;
let currentFocus = 0;

// 1. DENORMALIZE ON LOAD
mockProducts.forEach(product => {
    product.searchString = `${product.barcode} ${product.name} ${product.category} ${product.subCategory} ${product.minorCategory}`.toLowerCase();
});

const hideCostCheckbox = document.getElementById('hideCostCheckbox');
const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');
const invoiceListUI = document.getElementById('invoiceList');
const emptyInvoiceUI = document.getElementById('emptyInvoice');

// Global Keyboard Shortcuts (Alt + C)
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        hideCostCheckbox.checked = !hideCostCheckbox.checked;
        hideCostCheckbox.dispatchEvent(new Event('change'));
    }
});

// Hide Cost Checkbox Logic
hideCostCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('hide-cost');
    } else {
        document.body.classList.remove('hide-cost');
    }
});

// Dynamic Search Logic
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchDebounceTimeout);
    const query = e.target.value.trim();

    if (!query) {
        searchDropdown.classList.add('hidden');
        return;
    }

    searchDebounceTimeout = setTimeout(() => {
        const results = performSearch(query);
        renderDropdown(results);
    }, 150);
});

function performSearch(query) {
    const tokens = query.toLowerCase().split(/\s+/).filter(t => t.length > 0);

    // Fast-path for exact barcode
    if (tokens.length === 1 && /^\d+$/.test(tokens[0])) {
        const exactMatch = mockProducts.filter(p => p.barcode === tokens[0]);
        if (exactMatch.length > 0) return exactMatch;
    }

    // 2. SINGLE COMPARISON
    let matches = mockProducts.filter(product => {
        return tokens.every(token => product.searchString.includes(token));
    });

    matches.sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(tokens[0]) ? -1 : 1;
        const bStarts = b.name.toLowerCase().startsWith(tokens[0]) ? -1 : 1;
        return aStarts - bStarts;
    });

    return matches.slice(0, 30);
}

function renderDropdown(results) {
    searchDropdown.innerHTML = '';
    currentFocus = 0;

    if (results.length === 0) {
        searchDropdown.innerHTML = '<div class="p-4 text-sm text-gray-500 text-center">No products found</div>';
        searchDropdown.classList.remove('hidden');
        return;
    }

    results.forEach((product) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `search-item p-3 cursor-pointer border-l-4 border-transparent transition-colors`;

        const stockColor = product.stock <= 0 ? 'text-red-500 font-bold stock-display' : 'text-green-600 font-bold stock-display';

        itemDiv.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="font-bold text-base flex-1">${product.name}</div>
            </div>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm mt-1">
                <span class="${stockColor}">Stock: ${product.stock.toFixed(2)}</span>
                <span class="cost-display text-red-600 font-medium">Cost Price: ${product.costPrice.toFixed(2)}</span>
                <span class="price-display text-red-600 font-bold">Sale Price: ${product.price.toFixed(2)}</span>
            </div>
            <div class="text-xs text-[#38bdf8] mt-1 truncate cat-display">
                ${product.category} | ${product.subCategory} | ${product.minorCategory}
            </div>
        `;

        itemDiv.addEventListener('click', () => {
            addToInvoice(product);
            searchInput.value = '';
            searchDropdown.classList.add('hidden');
            searchInput.focus();
        });

        searchDropdown.appendChild(itemDiv);
    });

    searchDropdown.classList.remove('hidden');
    highlightActiveItem();
}

function highlightActiveItem() {
    const items = searchDropdown.querySelectorAll('.search-item');
    if (items.length === 0) return;

    items.forEach(item => {
        item.classList.remove('bg-teal-500', 'text-white', 'border-teal-700');
        item.classList.add('hover:bg-teal-50', 'hover:border-teal-500', 'text-gray-800');

        const stock = item.querySelector('.stock-display');
        if (!stock.classList.contains('text-red-500')) stock.classList.replace('text-white', 'text-green-600');
        item.querySelector('.cat-display').classList.replace('text-teal-100', 'text-[#38bdf8]');
        item.querySelector('.cost-display').classList.replace('text-red-200', 'text-red-600');
        item.querySelector('.price-display').classList.replace('text-red-200', 'text-red-600');
    });

    const activeItem = items[currentFocus];
    activeItem.classList.add('bg-teal-500', 'text-white', 'border-teal-700');
    activeItem.classList.remove('hover:bg-teal-50', 'hover:border-teal-500', 'text-gray-800');

    const activeStock = activeItem.querySelector('.stock-display');
    if (!activeStock.classList.contains('text-red-500')) activeStock.classList.replace('text-green-600', 'text-white');
    activeItem.querySelector('.cat-display').classList.replace('text-[#38bdf8]', 'text-teal-100');
    activeItem.querySelector('.cost-display').classList.replace('text-red-600', 'text-red-200');
    activeItem.querySelector('.price-display').classList.replace('text-red-600', 'text-red-200');

    activeItem.scrollIntoView({ block: 'nearest' });
}

// Arrow Key Navigation
searchInput.addEventListener('keydown', (e) => {
    const items = searchDropdown.querySelectorAll('.search-item');

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentFocus++;
        if (currentFocus >= items.length) currentFocus = 0;
        highlightActiveItem();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentFocus--;
        if (currentFocus < 0) currentFocus = items.length - 1;
        highlightActiveItem();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (items.length > 0 && currentFocus > -1) {
            items[currentFocus].click();
        }
    }
});

function addToInvoice(product) {
    const existingItem = invoiceItems.find(item => item.barcode === product.barcode);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        invoiceItems.push({ ...product, qty: 1 });
    }
    renderInvoice();
}

function removeFromInvoice(barcode) {
    invoiceItems = invoiceItems.filter(item => item.barcode !== barcode);
    renderInvoice();
}

function renderInvoice() {
    invoiceListUI.innerHTML = '';

    if (invoiceItems.length === 0) {
        emptyInvoiceUI.style.display = 'flex';
        updateTotals(0);
        return;
    }

    emptyInvoiceUI.style.display = 'none';
    let total = 0;

    invoiceItems.forEach((item, index) => {
        const itemTotal = item.qty * item.price;
        total += itemTotal;

        const tr = document.createElement('tr');
        tr.className = "hover:bg-gray-50 border-b border-gray-100";
        tr.innerHTML = `
            <td class="px-4 py-2">${index + 1}</td>
            <td class="px-4 py-2 font-medium text-teal-700">${item.name} <br><span class="text-xs text-gray-400">[${item.barcode}]</span></td>
            <td class="px-4 py-2 text-right">
                <input type="number" value="${item.qty}" min="1" class="border border-gray-300 rounded w-16 px-1 py-0.5 text-right focus:outline-none" onchange="updateQty('${item.barcode}', this.value)">
            </td>
            <td class="px-4 py-2 text-right">${item.price.toFixed(2)}</td>
            <td class="px-4 py-2 text-right font-bold">${itemTotal.toFixed(2)}</td>
            <td class="px-4 py-2 text-center">
                <button onclick="removeFromInvoice('${item.barcode}')" class="text-red-500 hover:bg-red-50 p-1 rounded"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
            </td>
        `;
        invoiceListUI.appendChild(tr);
    });

    updateTotals(total);
}

window.updateQty = function (barcode, newQty) {
    const qty = parseInt(newQty);
    if (qty > 0) {
        const item = invoiceItems.find(i => i.barcode === barcode);
        if (item) item.qty = qty;
        renderInvoice();
    }
};

function updateTotals(total) {
    document.getElementById('totalBill').textContent = total.toFixed(2);
    document.getElementById('totalAmount').textContent = total.toFixed(2);

    const cashInput = document.getElementById('cashInput');
    const cashAmount = parseFloat(cashInput.value) || 0;
    document.getElementById('paidAmount').textContent = cashAmount.toFixed(2);

    const change = cashAmount - total;
    document.getElementById('changeAmount').textContent = change > 0 ? change.toFixed(2) : '0.00';
}

document.getElementById('cashInput').addEventListener('input', () => {
    const total = parseFloat(document.getElementById('totalAmount').textContent);
    updateTotals(total);
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.add('hidden');
    }
});