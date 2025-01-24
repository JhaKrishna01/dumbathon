new Vue({
    el: '#app',
    data: {
      currentCategory: 'tech',
      isPlaying: false,
      audio: null,
      techProducts: [
        {
          id: 1,
          name: 'FireCracking Milk',
          description: 'Milk Without Pregnancy',
          price: 200,
          image: 'images/firecracker.jpg',
          reviews: [
            { rating: 4, comment: "It Was Perfect ,Down to the Last Minute detail.", user: "HomeLander" },
            { rating: 5, comment: "Cheers 🥂", user: "Tirian Lannister" }
          ]
        },
        {
          id: 2,
          name: "Ant-Man's Secret Pill",
          description: 'It Makes your PYTHON C++',
          price: 3000,
          image: 'images/antman.jpg',
          reviews: [
            { rating: 3, comment: "Made my code faster but now it's harder to read 😅", user: "PythonLover123" },
            { rating: 4, comment: "Finally my algorithms are blazing fast! 🚀", user: "CodeNinja" }
          ]
        },
        {
          id: 3,
          name: 'Software Engineer',
          description: 'Cheap as Sand, Sexy as your Boyfriend',
          price: 6000,
          image: 'images/software.png',
          reviews: [
            { rating: 5, comment: "Best investment ever! Now I debug in style 😎", user: "TechBro" },
            { rating: 4, comment: "Works great but coffee not included ☕", user: "BugHunter" }
          ]
        },
        {
          id: 4,
          name: 'Secret of Topper',
          description: 'Tell Me your Attendance and I will tell you your Future',
          price: 55,
          image: 'images/rock.gif',
          reviews: [
            { rating: 5, comment: "0% attendance, 100% results! Magic! ✨", user: "BackBencher" },
            { rating: 4, comment: "My parents still don't know how I did it 🤫", user: "SleepyStudent" }
          ]
        },
        {
          id: 5,
          name: '50+ WiFi credentials',
          description: 'Be Limitless not Out of Limit',
          price: 10000,
          image: 'images/wifi.gif',
          reviews: [
            { rating: 5, comment: "Internet everywhere! Living the dream 🌐", user: "WiFiWarrior" },
            { rating: 4, comment: "Worth every penny! No more data limits 🎉", user: "StreamingKing" }
          ]
        },
        {
          id: 6,
          name: 'PunuGulu',
          description: "Don't Buy This 💀.",
          price: 50,
          image: 'images/punugulu.jpg',
          reviews: [
            { rating: 1, comment: "They weren't kidding about not buying this 💀", user: "CuriousVictim" },
            { rating: 2, comment: "I should have listened to the description 😭", user: "RegretfulBuyer" }
          ]
        },
        {
          id: 7,
          name: 'Dosa',
          description: 'Dosa 😚😍',
          price: 100,
          image: 'images/dosa.jpg',
          reviews: [
            { rating: 5, comment: "Crispy perfection! Just like home 🤤", user: "DosaLover" },
            { rating: 5, comment: "Best dosa in the multiverse! 🌟", user: "SouthIndianFoodie" }
          ]
        }
      ],
      books: [
        {
          id: 101,
          name: '999+ Dark Jokes by Samay Raina',
          description: 'Maa ch**ae sab ki Placement 💀.',
          price: 69.0,
          image: 'images/samay.jpg',
          reviews: [
            { rating: 5, comment: "Darkest jokes ever!", user: "Tanish" },
            { rating: 4, comment: "MAZA aa Gaya Bhai!", user: "Sujal" }
          ]
        },
        {
          id: 102,
          name: 'Marketing Tips by Vijay Malya',
          description: 'If you Can\'t contribute just pull it ✅.',
          price: 150.0,
          image: 'images/vijaymalya.jpg',
          reviews: [
            { rating: 5, comment: "Great tips on how to leave the country! 🛫", user: "FugitiveFanatic" },
            { rating: 4, comment: "The chapter on bank loans was eye-opening 💰", user: "BusinessGuru" }
          ]
        },
        {
          id: 103,
          name: 'How to Center a Div by CompilerSuji',
          description: 'Pardon My Complexity in World Data Insane 🔱.',
          price: 150.0,
          image: 'images/compilersuji.png',
          reviews: [
            { rating: 5, comment: "Finally centered my div! Life changing 🎯", user: "CSSStruggler" },
            { rating: 4, comment: "Display: flex; changed my life!", user: "WebDevPro" }
          ]
        },
        {
          id: 104,
          name: 'How to Earn Respect.',
          description: 'Nirmala Sitharaman',
          price: '100 + 70% tax',
          image: 'images/nirmala.jpg',
          reviews: [
            { rating: 3, comment: "The tax chapter was too real 😭", user: "TaxPayer" },
            { rating: 4, comment: "Budget tips were surprisingly useful 💼", user: "FinanceWhiz" }
          ]
        },
        {
          id: 105,
          name: 'How to Pretend like a happy person',
          description: 'you are doing great',
          price: 'its free brother 🙂.',
          image: 'images/sad.gif',
          reviews: [
            { rating: 5, comment: "This free book saved me 😊", user: "SmileExpert" },
            { rating: 4, comment: "The fake laugh tutorial was spot on 😂", user: "HappinessHunter" }
          ]
        },
        {
          id: 106,
          name: 'What boys actually want',
          description: 'Andrew Garfield',
          price: 90.0,
          image: 'images/andrew.jpg',
          reviews: [
            { rating: 5, comment: "Finally someone understands! 🕷️", user: "SpideyFan" },
            { rating: 4, comment: "Chapter about MJ hit different 💔", user: "PeterParker" }
          ]
        },
        {
          id: 107,
          name: 'How To Become Best Coder',
          description: '404 not found 😟',
          price: 0.0,
          image: 'images/marc.jpg',
          reviews: [
            { rating: 4, comment: "Instructions unclear, became a debugger instead 🐛", user: "CodeNewbie" },
            { rating: 5, comment: "The 404 joke was actually the best lesson 🤣", user: "ErrorHandler" }
          ]
        },
        {
          id: 108,
          name: 'How To Make your Python 🐍 C++ ✅',
          description: 'stop Playing with it daily',
          price: 100.0,
          image: 'images/shrek.gif',
          reviews: [
            { rating: 4, comment: "My snake learned pointers! 🐍", user: "PythonMaster" },
            { rating: 5, comment: "Now my code runs at light speed ⚡", user: "SpeedDemon" }
          ]
        },
        {
          id: 109,
          name: 'How Much I LOVE JAVA ☕',
          description: 'VIT',
          price: '100000 for first category',
          image: 'images/vit.png',
          reviews: [
            { rating: 3, comment: "Too many semicolons; ; ; 😫", user: "JavaJunkie" },
            { rating: 4, comment: "The coffee metaphors were perfect ☕", user: "CaffeineCode" }
          ]
        },
        {
          id: 110,
          name: 'Learn GIT By Love story',
          description: 'CompilerSuji',
          price: 10.0,
          image: 'images/we.jpg',
          reviews: [
            { rating: 5, comment: "Best commit messages ever! ❤️", user: "GitMaster" },
            { rating: 4, comment: "The merge conflict chapter broke my heart 💔", user: "BranchManager" }
          ]
        },
        {
          id: 111,
          name: 'Two Pointers: A Love Story',
          description: 'While i != j 💔',
          price: 30.00,
          image: 'images/mens.jpg',
          reviews: [
            { rating: 5, comment: "Finally understood why i and j never meet 😢", user: "AlgoRomantic" },
            { rating: 4, comment: "The linked list chapter made me cry 😭", user: "PointerPro" }
          ]
        },
        {
          id: 112,
          name: 'How To Complete one Module in one day 💀.',
          description: 'Dr. ...... 😏',
          price: 40.0,
          image: 'images/teacher.gif',
          reviews: [
            { rating: 4, comment: "The all-nighter strategy works! 🌙", user: "LastMinuteLearner" },
            { rating: 5, comment: "Red Bull sponsorship when? ⚡", user: "CaffeineWarrior" }
          ]
        }
      ],
      cart: [],
      cartNotification: ''
    },
    computed: {
      calculateTotal() {
        return this.cart.reduce((total, item) => {
          const itemPrice = typeof item.price === 'string' 
            ? parseFloat(item.price) || 0 
            : item.price;
          return total + (itemPrice * item.quantity);
        }, 0).toFixed(2);
      }
    },
    created() {
      this.audio = new Audio('popular.mp3');
      this.audio.loop = true;
    },
    methods: {
      toggleMusic() {
        if (this.isPlaying) {
          this.audio.pause();
        } else {
          this.audio.play();
        }
        this.isPlaying = !this.isPlaying;
      },
      addToCart(product) {
        const price = typeof product.price === 'string' 
          ? parseFloat(product.price) || 0 
          : product.price;
        
        const existingItem = this.cart.find(item => item.id === product.id);
        
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          this.cart.push({
            ...product,
            price: price,
            quantity: 1
          });
        }
        
        this.cartNotification = `${product.name} added to cart!`;
        setTimeout(() => this.cartNotification = '', 2000);
      },
      removeFromCart(index) {
        const item = this.cart[index];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          this.cart.splice(index, 1);
        }
      },
      checkout() {
        window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
      },
      getAverageRating(reviews) {
        if (!reviews || reviews.length === 0) return 0;
        return (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
      }
    }
  });
  