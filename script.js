// ============================================
// FOOD DATABASE CLASS
// ============================================
class FoodDatabase {
    constructor() {
        this.foods = {
            'nasi putih': { calories: 130, protein: 2.7, carbs: 28, fats: 0.3, per: 100 },
            'nasi merah': { calories: 111, protein: 2.6, carbs: 23, fats: 0.9, per: 100 },
            'ayam goreng': { calories: 239, protein: 25, carbs: 0, fats: 14, per: 100 },
            'ayam panggang': { calories: 165, protein: 31, carbs: 0, fats: 3.6, per: 100 },
            'dada ayam': { calories: 165, protein: 31, carbs: 0, fats: 3.6, per: 100 },
            'telur': { calories: 155, protein: 13, carbs: 1.1, fats: 11, per: 100 },
            'telur rebus': { calories: 155, protein: 13, carbs: 1.1, fats: 11, per: 100 },
            'ikan tuna': { calories: 144, protein: 30, carbs: 0, fats: 1, per: 100 },
            'salmon': { calories: 208, protein: 20, carbs: 0, fats: 13, per: 100 },
            'daging sapi': { calories: 250, protein: 26, carbs: 0, fats: 15, per: 100 },
            'daging sapi tanpa lemak': { calories: 180, protein: 26, carbs: 0, fats: 8, per: 100 },
            'brokoli': { calories: 34, protein: 2.8, carbs: 7, fats: 0.4, per: 100 },
            'wortel': { calories: 41, protein: 0.9, carbs: 10, fats: 0.2, per: 100 },
            'bayam': { calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4, per: 100 },
            'kentang': { calories: 77, protein: 2, carbs: 17, fats: 0.1, per: 100 },
            'kentang goreng': { calories: 312, protein: 3.4, carbs: 41, fats: 15, per: 100 },
            'pasta': { calories: 131, protein: 5, carbs: 25, fats: 1.1, per: 100 },
            'roti putih': { calories: 265, protein: 9, carbs: 49, fats: 3.2, per: 100 },
            'roti gandum': { calories: 247, protein: 13, carbs: 41, fats: 4.2, per: 100 },
            'oatmeal': { calories: 68, protein: 2.4, carbs: 12, fats: 1.4, per: 100 },
            'susu': { calories: 61, protein: 3.2, carbs: 4.8, fats: 3.3, per: 100 },
            'susu rendah lemak': { calories: 50, protein: 3.4, carbs: 5, fats: 1, per: 100 },
            'yogurt': { calories: 59, protein: 10, carbs: 3.6, fats: 0.4, per: 100 },
            'yogurt yunani': { calories: 59, protein: 10, carbs: 3.6, fats: 0.4, per: 100 },
            'keju': { calories: 402, protein: 25, carbs: 1.3, fats: 33, per: 100 },
            'alpukat': { calories: 160, protein: 2, carbs: 9, fats: 15, per: 100 },
            'pisang': { calories: 89, protein: 1.1, carbs: 23, fats: 0.3, per: 100 },
            'apel': { calories: 52, protein: 0.3, carbs: 14, fats: 0.2, per: 100 },
            'jeruk': { calories: 47, protein: 0.9, carbs: 12, fats: 0.1, per: 100 },
            'kacang almond': { calories: 579, protein: 21, carbs: 22, fats: 50, per: 100 },
            'kacang tanah': { calories: 567, protein: 26, carbs: 16, fats: 49, per: 100 },
            'minyak zaitun': { calories: 884, protein: 0, carbs: 0, fats: 100, per: 100 },
            'mentega': { calories: 717, protein: 0.9, carbs: 0.1, fats: 81, per: 100 },
            'gula': { calories: 387, protein: 0, carbs: 100, fats: 0, per: 100 },
            'madu': { calories: 304, protein: 0.3, carbs: 82, fats: 0, per: 100 },
            'nasi goreng': { calories: 163, protein: 3.3, carbs: 28, fats: 4.5, per: 100 },
            'mie goreng': { calories: 158, protein: 4.2, carbs: 25, fats: 4.5, per: 100 },
            'bakso': { calories: 181, protein: 12, carbs: 15, fats: 8, per: 100 },
            'sate ayam': { calories: 200, protein: 20, carbs: 5, fats: 10, per: 100 },
            'rendang': { calories: 193, protein: 18, carbs: 5, fats: 11, per: 100 },
            'tempe': { calories: 193, protein: 19, carbs: 9, fats: 11, per: 100 },
            'tahu': { calories: 76, protein: 8, carbs: 2, fats: 4.8, per: 100 },
            'tahu goreng': { calories: 144, protein: 10, carbs: 4, fats: 10, per: 100 },
            'sambal': { calories: 20, protein: 0.5, carbs: 4, fats: 0.2, per: 100 },
            'kerupuk': { calories: 536, protein: 7, carbs: 60, fats: 28, per: 100 },
            'es krim': { calories: 207, protein: 3.5, carbs: 24, fats: 11, per: 100 },
            'coklat': { calories: 546, protein: 4.9, carbs: 61, fats: 31, per: 100 },
            'keripik kentang': { calories: 536, protein: 7, carbs: 53, fats: 35, per: 100 },
            'burger': { calories: 295, protein: 15, carbs: 33, fats: 10, per: 100 },
            'pizza': { calories: 266, protein: 11, carbs: 33, fats: 10, per: 100 },
            'donat': { calories: 452, protein: 5.3, carbs: 48, fats: 25, per: 100 },
            'kue': { calories: 367, protein: 4.3, carbs: 54, fats: 15, per: 100 },
            'nugget ayam': { calories: 296, protein: 14, carbs: 17, fats: 18, per: 100 },
            'sosis': { calories: 301, protein: 13, carbs: 2, fats: 27, per: 100 },
            'bakwan': { calories: 154, protein: 4.2, carbs: 20, fats: 6.5, per: 100 },
            'martabak': { calories: 310, protein: 8, carbs: 35, fats: 15, per: 100 },
            'gudeg': { calories: 120, protein: 2, carbs: 28, fats: 0.5, per: 100 },
            'rawon': { calories: 150, protein: 12, carbs: 15, fats: 5, per: 100 },
            'soto ayam': { calories: 85, protein: 6, carbs: 8, fats: 3, per: 100 },
            'gado-gado': { calories: 120, protein: 5, carbs: 15, fats: 4, per: 100 },
            'pecel': { calories: 95, protein: 4, carbs: 12, fats: 3, per: 100 },
            'ketoprak': { calories: 180, protein: 8, carbs: 25, fats: 5, per: 100 },
            'lontong sayur': { calories: 140, protein: 4, carbs: 28, fats: 2, per: 100 },
            'nasi uduk': { calories: 180, protein: 3, carbs: 35, fats: 3, per: 100 },
            'nasi kuning': { calories: 160, protein: 3, carbs: 32, fats: 2.5, per: 100 },
            'opor ayam': { calories: 200, protein: 18, carbs: 8, fats: 11, per: 100 },
            'ayam bakar': { calories: 220, protein: 24, carbs: 2, fats: 12, per: 100 },
            'ikan bakar': { calories: 150, protein: 25, carbs: 0, fats: 5, per: 100 },
            'ikan goreng': { calories: 200, protein: 22, carbs: 0, fats: 12, per: 100 },
            'udang goreng': { calories: 190, protein: 24, carbs: 0, fats: 10, per: 100 },
            'cumi goreng': { calories: 175, protein: 18, carbs: 8, fats: 7, per: 100 },
            'capcay': { calories: 60, protein: 3, carbs: 8, fats: 2, per: 100 },
            'sayur asem': { calories: 35, protein: 1.5, carbs: 7, fats: 0.3, per: 100 },
            'sayur lodeh': { calories: 80, protein: 2, carbs: 12, fats: 2.5, per: 100 },
            'sayur sop': { calories: 30, protein: 1.5, carbs: 5, fats: 0.5, per: 100 },
            'tumis kangkung': { calories: 40, protein: 2.5, carbs: 5, fats: 1, per: 100 },
            'tumis buncis': { calories: 45, protein: 2, carbs: 6, fats: 1.5, per: 100 },
            'perkedel': { calories: 180, protein: 4, carbs: 20, fats: 9, per: 100 },
            'kerupuk udang': { calories: 450, protein: 8, carbs: 55, fats: 22, per: 100 },
            'kerupuk ikan': { calories: 420, protein: 10, carbs: 50, fats: 20, per: 100 },
            'emping': { calories: 550, protein: 12, carbs: 45, fats: 35, per: 100 },
            'kacang rebus': { calories: 120, protein: 6, carbs: 10, fats: 6, per: 100 },
            'kacang goreng': { calories: 580, protein: 26, carbs: 18, fats: 50, per: 100 },
            'pisang goreng': { calories: 250, protein: 1.5, carbs: 35, fats: 12, per: 100 },
            'pempek': { calories: 180, protein: 8, carbs: 25, fats: 5, per: 100 },
            'siomay': { calories: 120, protein: 6, carbs: 15, fats: 4, per: 100 },
            'batagor': { calories: 200, protein: 8, carbs: 25, fats: 8, per: 100 },
            'cilok': { calories: 150, protein: 4, carbs: 28, fats: 2, per: 100 },
            'cireng': { calories: 280, protein: 2, carbs: 45, fats: 10, per: 100 },
            'gehu': { calories: 220, protein: 5, carbs: 30, fats: 9, per: 100 },
            'combro': { calories: 200, protein: 4, carbs: 32, fats: 6, per: 100 },
            'misro': { calories: 250, protein: 3, carbs: 40, fats: 8, per: 100 },
            'oncom': { calories: 150, protein: 12, carbs: 15, fats: 6, per: 100 },
            'peuyeum': { calories: 180, protein: 2, carbs: 42, fats: 0.5, per: 100 },
            'colenak': { calories: 250, protein: 2, carbs: 50, fats: 5, per: 100 },
            'bandrek': { calories: 80, protein: 0.5, carbs: 18, fats: 0.2, per: 100 },
            'bajigur': { calories: 90, protein: 0.5, carbs: 20, fats: 0.3, per: 100 },
            'es campur': { calories: 120, protein: 1, carbs: 28, fats: 0.5, per: 100 },
            'es teler': { calories: 150, protein: 2, carbs: 32, fats: 2, per: 100 },
            'es doger': { calories: 140, protein: 1.5, carbs: 30, fats: 1.5, per: 100 },
            'es cendol': { calories: 100, protein: 0.5, carbs: 24, fats: 0.2, per: 100 },
            'es dawet': { calories: 95, protein: 0.5, carbs: 23, fats: 0.2, per: 100 },
            'kolak': { calories: 130, protein: 1, carbs: 30, fats: 0.5, per: 100 },
            'bubur sumsum': { calories: 110, protein: 2, carbs: 22, fats: 1, per: 100 },
            'bubur kacang hijau': { calories: 120, protein: 4, carbs: 22, fats: 1.5, per: 100 },
            'bubur ayam': { calories: 140, protein: 6, carbs: 25, fats: 2, per: 100 },
            'bubur manado': { calories: 100, protein: 3, carbs: 18, fats: 2, per: 100 },
            'nasi gudeg': { calories: 180, protein: 4, carbs: 35, fats: 2.5, per: 100 },
            'nasi liwet': { calories: 170, protein: 3, carbs: 34, fats: 2, per: 100 },
            'nasi timbel': { calories: 160, protein: 3, carbs: 32, fats: 2, per: 100 },
            'nasi pecel': { calories: 150, protein: 5, carbs: 28, fats: 3, per: 100 },
            'nasi krawu': { calories: 190, protein: 8, carbs: 30, fats: 4, per: 100 },
            'nasi gandul': { calories: 200, protein: 10, carbs: 28, fats: 5, per: 100 },
            'nasi grombyang': { calories: 180, protein: 9, carbs: 25, fats: 4.5, per: 100 },
            'nasi lengko': { calories: 160, protein: 6, carbs: 28, fats: 3, per: 100 },
            'nasi bogana': { calories: 220, protein: 12, carbs: 30, fats: 6, per: 100 },
            'nasi megono': { calories: 140, protein: 4, carbs: 26, fats: 2.5, per: 100 },
            'nasi gudeg jogja': { calories: 200, protein: 5, carbs: 38, fats: 3, per: 100 },
            'nasi kucing': { calories: 120, protein: 3, carbs: 24, fats: 1.5, per: 100 },
            'nasi jinggo': { calories: 130, protein: 4, carbs: 24, fats: 2, per: 100 },
            'nasi gudeg krecek': { calories: 210, protein: 8, carbs: 35, fats: 4, per: 100 },
            'nasi gudeg areh': { calories: 220, protein: 6, carbs: 38, fats: 4.5, per: 100 },
            'nasi gudeg sambel': { calories: 200, protein: 5, carbs: 36, fats: 3.5, per: 100 },
            'nasi gudeg tahu': { calories: 190, protein: 7, carbs: 34, fats: 3, per: 100 },
            'nasi gudeg tempe': { calories: 195, protein: 8, carbs: 34, fats: 3.5, per: 100 },
            'nasi gudeg ayam': { calories: 230, protein: 12, carbs: 36, fats: 5, per: 100 },
            'nasi gudeg telur': { calories: 210, protein: 10, carbs: 35, fats: 4, per: 100 },
            'nasi gudeg krecek ayam': { calories: 250, protein: 15, carbs: 37, fats: 6, per: 100 },
            'nasi gudeg komplit': { calories: 280, protein: 18, carbs: 40, fats: 7, per: 100 }
        };
    }

    search(query) {
        const searchTerm = query.toLowerCase().trim();
        if (!searchTerm) return [];
        
        return Object.keys(this.foods)
            .filter(food => food.includes(searchTerm))
            .slice(0, 10)
            .map(food => ({
                name: food,
                ...this.foods[food]
            }));
    }

    getFood(name) {
        return this.foods[name.toLowerCase()] || null;
    }

    calculateNutrition(foodName, amount) {
        const food = this.getFood(foodName);
        if (!food) return null;

        const multiplier = amount / food.per;
        return {
            name: foodName,
            amount: amount,
            calories: Math.round(food.calories * multiplier),
            protein: Math.round(food.protein * multiplier * 10) / 10,
            carbs: Math.round(food.carbs * multiplier * 10) / 10,
            fats: Math.round(food.fats * multiplier * 10) / 10
        };
    }
}

// ============================================
// CALCULATOR CLASSES
// ============================================
class BMICalculator {
    static calculate(weight, height) {
        if (!weight || !height || weight <= 0 || height <= 0) {
            return null;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        
        return {
            value: parseFloat(bmi.toFixed(1)),
            category: this.getCategory(bmi),
            color: this.getCategoryColor(bmi)
        };
    }

    static getCategory(bmi) {
        if (bmi < 18.5) return 'Underweight (Kekurangan berat badan)';
        if (bmi < 25) return 'Normal (Berat badan normal)';
        if (bmi < 30) return 'Overweight (Kelebihan berat badan)';
        return 'Obese (Obesitas)';
    }

    static getCategoryColor(bmi) {
        if (bmi < 18.5) return 'text-blue-400';
        if (bmi < 25) return 'text-green-400';
        if (bmi < 30) return 'text-yellow-400';
        return 'text-red-400';
    }
}

class BMRCalculator {
    static calculate(gender, age, weight, height) {
        if (!age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
            return null;
        }

        // Mifflin-St Jeor Equation
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        return Math.round(bmr);
    }
}

class TDEECalculator {
    static calculate(bmr, activityLevel) {
        if (!bmr || bmr <= 0 || !activityLevel) {
            return null;
        }

        return Math.round(bmr * activityLevel);
    }
}

class MacroCalculator {
    static calculate(calories, goal) {
        if (!calories || calories <= 0) {
            return null;
        }

        const ratios = this.getRatios(goal);
        const protein = Math.round((calories * ratios.protein) / 4);
        const carbs = Math.round((calories * ratios.carbs) / 4);
        const fats = Math.round((calories * ratios.fat) / 9);

        return {
            protein,
            carbs,
            fats,
            proteinPercent: Math.round(ratios.protein * 100),
            carbsPercent: Math.round(ratios.carbs * 100),
            fatsPercent: Math.round(ratios.fat * 100)
        };
    }

    static getRatios(goal) {
        const ratios = {
            cutting: { protein: 0.40, carbs: 0.30, fat: 0.30 },
            maintenance: { protein: 0.30, carbs: 0.40, fat: 0.30 },
            bulking: { protein: 0.25, carbs: 0.45, fat: 0.30 }
        };
        return ratios[goal] || ratios.maintenance;
    }
}

class CalorieGoalCalculator {
    static calculate(tdee, goalType) {
        if (!tdee || tdee <= 0) {
            return null;
        }

        const adjustments = {
            lose: -500,
            maintain: 0,
            gain: 500
        };

        const messages = {
            lose: 'Defisit 500 kalori untuk penurunan berat badan yang sehat',
            maintain: 'Kalori untuk mempertahankan berat badan',
            gain: 'Surplus 500 kalori untuk peningkatan massa otot'
        };

        return {
            target: Math.round(tdee + (adjustments[goalType] || 0)),
            message: messages[goalType] || messages.maintain
        };
    }
}

class BodyFatCalculator {
    static calculate(gender, age, bmi) {
        if (!age || !bmi || age <= 0 || bmi <= 0) {
            return null;
        }

        // Deurenberg formula
        let bodyFat;
        if (gender === 'male') {
            bodyFat = (1.20 * bmi) + (0.23 * age) - 16.2;
        } else {
            bodyFat = (1.20 * bmi) + (0.23 * age) - 5.4;
        }

        bodyFat = Math.max(5, Math.min(50, bodyFat));
        
        return {
            value: parseFloat(bodyFat.toFixed(1)),
            category: this.getCategory(gender, bodyFat),
            color: this.getCategoryColor(gender, bodyFat)
        };
    }

    static getCategory(gender, bodyFat) {
        if (gender === 'male') {
            if (bodyFat < 10) return 'Sangat Rendah (Atlet)';
            if (bodyFat < 14) return 'Rendah (Fitness)';
            if (bodyFat < 18) return 'Normal (Sehat)';
            if (bodyFat < 25) return 'Tinggi (Overweight)';
            return 'Sangat Tinggi (Obese)';
        } else {
            if (bodyFat < 16) return 'Sangat Rendah (Atlet)';
            if (bodyFat < 20) return 'Rendah (Fitness)';
            if (bodyFat < 25) return 'Normal (Sehat)';
            if (bodyFat < 32) return 'Tinggi (Overweight)';
            return 'Sangat Tinggi (Obese)';
        }
    }

    static getCategoryColor(gender, bodyFat) {
        if (gender === 'male') {
            if (bodyFat < 10) return 'text-blue-400';
            if (bodyFat < 14) return 'text-green-400';
            if (bodyFat < 18) return 'text-green-300';
            if (bodyFat < 25) return 'text-yellow-400';
            return 'text-red-400';
        } else {
            if (bodyFat < 16) return 'text-blue-400';
            if (bodyFat < 20) return 'text-green-400';
            if (bodyFat < 25) return 'text-green-300';
            if (bodyFat < 32) return 'text-yellow-400';
            return 'text-red-400';
        }
    }
}

// ============================================
// MEAL PLANNER CLASS
// ============================================
class MealPlanner {
    constructor(foodDatabase) {
        this.foodDatabase = foodDatabase;
        this.meals = {
            breakfast: [],
            lunch: [],
            dinner: [],
            snack: []
        };
        this.targetCalories = 2000;
    }

    addMeal(mealType, meal) {
        if (this.meals[mealType]) {
            this.meals[mealType].push(meal);
            return true;
        }
        return false;
    }

    removeMeal(mealType, index) {
        if (this.meals[mealType] && this.meals[mealType][index]) {
            this.meals[mealType].splice(index, 1);
            return true;
        }
        return false;
    }

    getTotalNutrition() {
        const allMeals = Object.values(this.meals).flat();
        return allMeals.reduce((total, meal) => ({
            calories: total.calories + meal.calories,
            protein: total.protein + meal.protein,
            carbs: total.carbs + meal.carbs,
            fats: total.fats + meal.fats
        }), { calories: 0, protein: 0, carbs: 0, fats: 0 });
    }

    getRemainingCalories() {
        const total = this.getTotalNutrition();
        return this.targetCalories - total.calories;
    }

    getProgress() {
        const total = this.getTotalNutrition();
        return Math.min(100, (total.calories / this.targetCalories) * 100);
    }

    setTargetCalories(calories) {
        this.targetCalories = calories;
    }

    getMeals(mealType) {
        return this.meals[mealType] || [];
    }

    getAllMeals() {
        return this.meals;
    }

    clearAll() {
        this.meals = {
            breakfast: [],
            lunch: [],
            dinner: [],
            snack: []
        };
    }
}

// ============================================
// PROGRESS TRACKER CLASS
// ============================================
class ProgressTracker {
    constructor() {
        this.history = [];
    }

    addProgress(date, weight, bodyFat = null) {
        if (!date || !weight || weight <= 0) {
            return false;
        }

        const progress = {
            date: date,
            weight: weight,
            bodyFat: bodyFat
        };

        this.history.push(progress);
        this.history.sort((a, b) => new Date(a.date) - new Date(b.date));
        return true;
    }

    removeProgress(index) {
        if (this.history[index]) {
            this.history.splice(index, 1);
            return true;
        }
        return false;
    }

    getHistory() {
        return this.history;
    }

    getWeightChange(index) {
        if (index === 0 || !this.history[index - 1]) {
            return null;
        }
        return this.history[index].weight - this.history[index - 1].weight;
    }

    clearHistory() {
        this.history = [];
    }
}

// ============================================
// UI HANDLER CLASS
// ============================================
class UIHandler {
    constructor() {
        this.resultBoxes = {};
    }

    showError(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = `<p class="text-red-400 text-center">${message}</p>`;
            element.classList.remove('hidden');
            element.classList.add('show');
        }
    }

    showResult(elementId, html) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
            element.classList.remove('hidden');
            element.classList.add('show');
        }
    }

    updateCalorieDisplay(mealPlanner) {
        const total = mealPlanner.getTotalNutrition();
        const remaining = mealPlanner.getRemainingCalories();
        const progress = mealPlanner.getProgress();

        document.getElementById('consumed-calories').textContent = Math.round(total.calories);
        document.getElementById('remaining-calories').textContent = Math.round(remaining);
        document.getElementById('calorie-progress').textContent = Math.round(progress) + '%';
        
        const progressBar = document.getElementById('calorie-bar');
        if (progressBar) {
            progressBar.style.width = progress + '%';
            
            // Update color based on progress
            progressBar.classList.remove('from-purple-500', 'to-pink-500', 'from-yellow-500', 'to-orange-500', 'from-red-500', 'to-orange-500');
            if (progress > 100) {
                progressBar.classList.add('from-red-500', 'to-orange-500');
            } else if (progress > 80) {
                progressBar.classList.add('from-yellow-500', 'to-orange-500');
            } else {
                progressBar.classList.add('from-purple-500', 'to-pink-500');
            }
        }

        document.getElementById('total-protein').textContent = Math.round(total.protein) + 'g';
        document.getElementById('total-carbs').textContent = Math.round(total.carbs) + 'g';
        document.getElementById('total-fats').textContent = Math.round(total.fats) + 'g';
        document.getElementById('target-calories').textContent = mealPlanner.targetCalories;
    }

    updateMealDisplay(mealPlanner) {
        const mealSections = {
            breakfast: 'breakfast-meals',
            lunch: 'lunch-meals',
            dinner: 'dinner-meals',
            snack: 'snack-meals'
        };

        Object.keys(mealSections).forEach(mealType => {
            const container = document.getElementById(mealSections[mealType]);
            const meals = mealPlanner.getMeals(mealType);

            if (meals.length === 0) {
                container.innerHTML = '<p class="text-gray-500 text-sm text-center">Belum ada makanan</p>';
                return;
            }

            container.innerHTML = meals.map((meal, index) => `
                <div class="meal-item">
                    <div class="flex-1">
                        <div class="font-semibold text-white capitalize">${meal.name}</div>
                        <div class="text-sm text-purple-300">
                            ${meal.amount}g | ${meal.calories} kkal | P: ${meal.protein}g | K: ${meal.carbs}g | L: ${meal.fats}g
                        </div>
                    </div>
                    <button onclick="app.removeMeal('${mealType}', ${index})" class="btn-danger ml-4">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');
        });
    }

    displayFoodResults(results) {
        const resultsDiv = document.getElementById('food-results');
        if (!resultsDiv) return;

        if (results.length === 0) {
            resultsDiv.innerHTML = '<p class="text-purple-300 text-center">Makanan tidak ditemukan. Coba kata kunci lain.</p>';
            return;
        }

        resultsDiv.innerHTML = results.map(food => `
            <div class="food-item" onclick="app.selectFood('${food.name}')">
                <div class="flex justify-between items-center">
                    <div>
                        <div class="font-semibold text-white capitalize">${food.name}</div>
                        <div class="text-sm text-purple-300">
                            ${food.calories} kkal | P: ${food.protein}g | K: ${food.carbs}g | L: ${food.fats}g
                        </div>
                    </div>
                    <i class="fas fa-plus text-purple-400"></i>
                </div>
            </div>
        `).join('');
    }

    displayProgressHistory(progressTracker) {
        const container = document.getElementById('progress-history');
        if (!container) return;

        const history = progressTracker.getHistory();

        if (history.length === 0) {
            container.innerHTML = '<p class="text-purple-300 text-center">Belum ada data progress. Mulai catat progress Anda!</p>';
            return;
        }

        container.innerHTML = history.map((progress, index) => {
            const date = new Date(progress.date).toLocaleDateString('id-ID', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            
            const weightChange = progressTracker.getWeightChange(index);
            const weightChangeColor = weightChange && weightChange < 0 ? 'text-green-400' : weightChange && weightChange > 0 ? 'text-red-400' : 'text-gray-400';
            
            return `
                <div class="progress-item">
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <div class="font-semibold text-white">${date}</div>
                            <div class="text-purple-300 mt-1">
                                Berat Badan: <span class="text-white font-semibold">${progress.weight} kg</span>
                                ${weightChange ? ` <span class="${weightChangeColor}">(${weightChange > 0 ? '+' : ''}${weightChange.toFixed(1)} kg)</span>` : ''}
                            </div>
                            ${progress.bodyFat ? `<div class="text-purple-300">Body Fat: <span class="text-white font-semibold">${progress.bodyFat}%</span></div>` : ''}
                        </div>
                        <button onclick="app.removeProgress(${index})" class="btn-danger ml-4">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ============================================
// STORAGE MANAGER CLASS
// ============================================
class StorageManager {
    static save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Error saving to localStorage:', e);
            return false;
        }
    }

    static load(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error loading from localStorage:', e);
            return null;
        }
    }

    static remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error removing from localStorage:', e);
            return false;
        }
    }
}

// ============================================
// MAIN APPLICATION CLASS
// ============================================
class GymRatApp {
    constructor() {
        this.foodDatabase = new FoodDatabase();
        this.mealPlanner = new MealPlanner(this.foodDatabase);
        this.progressTracker = new ProgressTracker();
        this.ui = new UIHandler();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadData();
        this.updateDisplays();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (mobileMenu) mobileMenu.classList.add('hidden');
                }
            });
        });

        // Set today's date as default
        const today = new Date().toISOString().split('T')[0];
        const progressDateInput = document.getElementById('progress-date');
        if (progressDateInput) {
            progressDateInput.value = today;
        }

        // Food search on Enter key
        const foodSearchInput = document.getElementById('food-search');
        if (foodSearchInput) {
            foodSearchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.searchFood();
                }
            });
        }

        // Target calories click to edit
        const targetCaloriesElement = document.getElementById('target-calories');
        if (targetCaloriesElement) {
            targetCaloriesElement.addEventListener('click', () => {
                const newTarget = prompt('Masukkan target kalori harian baru:', this.mealPlanner.targetCalories);
                if (newTarget && !isNaN(newTarget) && newTarget > 0) {
                    this.setTargetCalories(parseInt(newTarget));
                }
            });
            targetCaloriesElement.style.cursor = 'pointer';
            targetCaloriesElement.title = 'Klik untuk mengubah target kalori';
        }
    }

    // Calculator Methods
    calculateBMI() {
        const weight = parseFloat(document.getElementById('bmi-weight').value);
        const height = parseFloat(document.getElementById('bmi-height').value);
        const result = BMICalculator.calculate(weight, height);

        if (!result) {
            this.ui.showError('bmi-result', 'Mohon masukkan berat dan tinggi badan yang valid');
            return;
        }

        this.ui.showResult('bmi-result', `
            <div class="text-center">
                <div class="text-4xl font-bold ${result.color} mb-2">${result.value}</div>
                <div class="text-lg ${result.color}">${result.category}</div>
                <div class="text-sm text-purple-300 mt-2">Berat Badan: ${weight} kg | Tinggi: ${height} cm</div>
            </div>
        `);
    }

    calculateBMR() {
        const gender = document.getElementById('bmr-gender').value;
        const age = parseInt(document.getElementById('bmr-age').value);
        const weight = parseFloat(document.getElementById('bmr-weight').value);
        const height = parseFloat(document.getElementById('bmr-height').value);
        const bmr = BMRCalculator.calculate(gender, age, weight, height);

        if (!bmr) {
            this.ui.showError('bmr-result', 'Mohon masukkan semua data yang valid');
            return;
        }

        this.ui.showResult('bmr-result', `
            <div class="text-center">
                <div class="text-3xl font-bold text-purple-400 mb-2">${bmr} kkal</div>
                <div class="text-sm text-purple-300">Basal Metabolic Rate (Kalori saat istirahat)</div>
                <div class="text-xs text-gray-400 mt-2">Gunakan nilai ini untuk menghitung TDEE</div>
            </div>
        `);
    }

    calculateTDEE() {
        const bmr = parseFloat(document.getElementById('tdee-bmr').value);
        const activity = parseFloat(document.getElementById('tdee-activity').value);
        const tdee = TDEECalculator.calculate(bmr, activity);

        if (!tdee) {
            this.ui.showError('tdee-result', 'Mohon masukkan BMR yang valid');
            return;
        }

        this.ui.showResult('tdee-result', `
            <div class="text-center">
                <div class="text-3xl font-bold text-green-400 mb-2">${tdee} kkal</div>
                <div class="text-sm text-purple-300">Total Daily Energy Expenditure</div>
                <div class="text-xs text-gray-400 mt-2">Kalori yang dibutuhkan per hari berdasarkan aktivitas</div>
            </div>
        `);
    }

    calculateMacros() {
        const calories = parseFloat(document.getElementById('macro-calories').value);
        const goal = document.getElementById('macro-goal').value;
        const result = MacroCalculator.calculate(calories, goal);

        if (!result) {
            this.ui.showError('macro-result', 'Mohon masukkan total kalori yang valid');
            return;
        }

        this.ui.showResult('macro-result', `
            <div class="space-y-3">
                <div class="text-center mb-4">
                    <div class="text-2xl font-bold text-purple-400">Distribusi Makronutrien</div>
                </div>
                <div class="grid grid-cols-3 gap-3">
                    <div class="text-center p-3 bg-purple-500/20 rounded-lg">
                        <div class="text-xl font-bold text-white">${result.protein}g</div>
                        <div class="text-xs text-purple-300">Protein</div>
                        <div class="text-xs text-gray-400">${result.proteinPercent}%</div>
                    </div>
                    <div class="text-center p-3 bg-green-500/20 rounded-lg">
                        <div class="text-xl font-bold text-white">${result.carbs}g</div>
                        <div class="text-xs text-green-300">Karbohidrat</div>
                        <div class="text-xs text-gray-400">${result.carbsPercent}%</div>
                    </div>
                    <div class="text-center p-3 bg-yellow-500/20 rounded-lg">
                        <div class="text-xl font-bold text-white">${result.fats}g</div>
                        <div class="text-xs text-yellow-300">Lemak</div>
                        <div class="text-xs text-gray-400">${result.fatsPercent}%</div>
                    </div>
                </div>
            </div>
        `);
    }

    calculateCalorieGoal() {
        const tdee = parseFloat(document.getElementById('goal-tdee').value);
        const goalType = document.getElementById('goal-type').value;
        const result = CalorieGoalCalculator.calculate(tdee, goalType);

        if (!result) {
            this.ui.showError('goal-result', 'Mohon masukkan TDEE yang valid');
            return;
        }

        this.ui.showResult('goal-result', `
            <div class="text-center">
                <div class="text-3xl font-bold text-yellow-400 mb-2">${result.target} kkal</div>
                <div class="text-sm text-purple-300">${result.message}</div>
                <button onclick="app.setTargetCalories(${result.target})" class="btn-primary mt-4 px-6 py-2 rounded-lg text-sm">
                    Gunakan sebagai Target Harian
                </button>
            </div>
        `);
    }

    calculateBodyFat() {
        const gender = document.getElementById('bf-gender').value;
        const age = parseInt(document.getElementById('bf-age').value);
        const bmi = parseFloat(document.getElementById('bf-bmi').value);
        const result = BodyFatCalculator.calculate(gender, age, bmi);

        if (!result) {
            this.ui.showError('bf-result', 'Mohon masukkan usia dan BMI yang valid');
            return;
        }

        this.ui.showResult('bf-result', `
            <div class="text-center">
                <div class="text-4xl font-bold ${result.color} mb-2">${result.value}%</div>
                <div class="text-lg ${result.color}">${result.category}</div>
                <div class="text-sm text-purple-300 mt-2">Estimasi menggunakan formula Deurenberg</div>
            </div>
        `);
    }

    // Meal Planner Methods
    searchFood() {
        const searchTerm = document.getElementById('food-search').value;
        const results = this.foodDatabase.search(searchTerm);
        this.ui.displayFoodResults(results);
    }

    selectFood(foodName) {
        const mealType = prompt(`Pilih waktu makan:\n1. Sarapan\n2. Makan Siang\n3. Makan Malam\n4. Snack\n\nMasukkan angka (1-4):`);
        
        if (!mealType || mealType < 1 || mealType > 4) {
            return;
        }

        const amount = parseFloat(prompt(`Masukkan jumlah (gram) untuk ${foodName}:`));
        if (!amount || amount <= 0) {
            return;
        }

        const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];
        const mealTypeKey = mealTypes[parseInt(mealType) - 1];
        
        const meal = this.foodDatabase.calculateNutrition(foodName, amount);
        if (meal) {
            this.mealPlanner.addMeal(mealTypeKey, meal);
            this.saveData();
            this.updateDisplays();
            
            const mealTypeNames = {
                breakfast: 'Sarapan',
                lunch: 'Makan Siang',
                dinner: 'Makan Malam',
                snack: 'Snack'
            };
            
            const resultsDiv = document.getElementById('food-results');
            if (resultsDiv) {
                resultsDiv.innerHTML = `<p class="text-green-400 text-center">✓ ${foodName} ditambahkan ke ${mealTypeNames[mealTypeKey]}!</p>`;
            }
        }
    }

    removeMeal(mealType, index) {
        this.mealPlanner.removeMeal(mealType, index);
        this.saveData();
        this.updateDisplays();
    }

    setTargetCalories(calories) {
        this.mealPlanner.setTargetCalories(calories);
        this.saveData();
        this.updateDisplays();
        alert(`Target kalori harian diatur ke ${calories} kkal`);
    }

    // Progress Tracker Methods
    addProgress() {
        const date = document.getElementById('progress-date').value;
        const weight = parseFloat(document.getElementById('progress-weight').value);
        const bodyFat = parseFloat(document.getElementById('progress-bodyfat').value) || null;

        if (this.progressTracker.addProgress(date, weight, bodyFat)) {
            this.saveData();
            this.updateDisplays();
            
            document.getElementById('progress-weight').value = '';
            document.getElementById('progress-bodyfat').value = '';
        } else {
            alert('Mohon masukkan tanggal dan berat badan yang valid');
        }
    }

    removeProgress(index) {
        if (confirm('Hapus data progress ini?')) {
            this.progressTracker.removeProgress(index);
            this.saveData();
            this.updateDisplays();
        }
    }

    // Data Management
    saveData() {
        StorageManager.save('dailyMeals', this.mealPlanner.getAllMeals());
        StorageManager.save('progressHistory', this.progressTracker.getHistory());
        StorageManager.save('targetCalories', this.mealPlanner.targetCalories);
    }

    loadData() {
        const savedMeals = StorageManager.load('dailyMeals');
        const savedProgress = StorageManager.load('progressHistory');
        const savedTarget = StorageManager.load('targetCalories');

        if (savedMeals) {
            this.mealPlanner.meals = savedMeals;
        }

        if (savedProgress) {
            this.progressTracker.history = savedProgress;
        }

        if (savedTarget) {
            this.mealPlanner.setTargetCalories(savedTarget);
        }
    }

    updateDisplays() {
        this.ui.updateCalorieDisplay(this.mealPlanner);
        this.ui.updateMealDisplay(this.mealPlanner);
        this.ui.displayProgressHistory(this.progressTracker);
    }
}

// ============================================
// GLOBAL FUNCTIONS (for HTML onclick)
// ============================================
let app;

document.addEventListener('DOMContentLoaded', () => {
    app = new GymRatApp();
});

// Global functions for HTML onclick handlers
function calculateBMI() { app.calculateBMI(); }
function calculateBMR() { app.calculateBMR(); }
function calculateTDEE() { app.calculateTDEE(); }
function calculateMacros() { app.calculateMacros(); }
function calculateCalorieGoal() { app.calculateCalorieGoal(); }
function calculateBodyFat() { app.calculateBodyFat(); }
function searchFood() { app.searchFood(); }
function addProgress() { app.addProgress(); }
