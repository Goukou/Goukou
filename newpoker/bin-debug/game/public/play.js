// let one:number
// let two:number
// let three:number
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var play = (function () {
    //arr=['Diamonds']
    //arr=[this._coins,this._seven,this._bar,this._Diamonds,this._clover,this._watermelon,this._lemon,this._Litchi] 
    function play() {
        this.double = 1;
        this.many = Player._many;
        this.playnumber = 0;
        this.m_netStep = -1;
        this.m_isNewBe = false; //是否新玩家
        this.m_id = -1;
        this.playone = this.one;
        this.playtwo = this.two;
        this.playthree = this.three;
        //arr=['seven'] 
        //dupArr = [1, 2, 3, 3, 3, 3, 6, 7]
        this.arr2 = [''];
        this.arr = ['coins', 'seven', 'Diamonds', 'clover', 'watermelon', 'lemon', 'Litchi'];
        this.one = this.four();
        this.two = this.five();
        this.three = this.six();
        this.playone = this.one;
        this.playtwo = this.two;
        this.playthree = this.three;
    }
    play.prototype.shuaxin = function () {
        this.playone = this.one;
        this.playtwo = this.two;
        this.playthree = this.three;
        this.one = this.four();
        this.two = this.five();
        this.three = this.six();
    };
    play.prototype.z = function () {
    };
    play.prototype.a = function () {
        return Player._many = Player._many - 10 * this.double;
    };
    play.prototype.four = function () {
        return this.arr[Math.floor((Math.random() * this.arr.length))];
        //     three = this.arr[Math.floor((Math.random()*this.arr.length))]; 
        //     two = this.arr[Math.floor((Math.random()*this.arr.length))]; 
        //     three = alert(this.arr[Math.floor((Math.random()*this.arr.length))]) 
        //      delete console.log(arr.datadesitoconsole.lof thisconsole.logdesu) 
    };
    play.prototype.btn = function (data) {
    };
    play.prototype.five = function () {
        return this.arr[Math.floor((Math.random() * this.arr.length))];
    };
    play.prototype.six = function () {
        return this.arr[Math.floor((Math.random() * this.arr.length))];
    };
    play.prototype.maths = function () {
        //
        //  console.log('double: '+this.double)
        //  console.log('1   ',this.one,this.two,this.three)
        //  console.log('2   ',this.one1,this.two1,this.three1)
        //  console.log('3   ',this.one2,this.two2,this.three2)
        //  console.log('4   ',this.one3,this.two3,this.three3)
        //  console.log('5   ',this.one4,this.two4,this.three4)
        // console.log(this.one)   
        //console.log() 
        //console.log(this.five()) 
        //  
        //console.log(this.two) 
        //  this.one = this.four()
        //  this.two = this.five()
        //  this.three = this.six()
        // console.log(this.three) 
        // this.one = this.one  
        // console.log(this.two)
        // console.log(this.three)
    };
    play.prototype.fost2 = function () {
        if (this.one == 'coins') {
            this.one1 = 'clover';
        }
        if (this.one == 'clover') {
            this.one1 = 'lemon';
        }
        if (this.one == 'lemon') {
            this.one1 = 'watermelon';
        }
        if (this.one == 'watermelon') {
            this.one1 = 'Litchi';
        }
        if (this.one == 'Litchi') {
            this.one1 = 'seven';
        }
        if (this.one == 'seven') {
            this.one1 = 'Diamonds';
        }
        if (this.one == 'Diamonds') {
            this.one1 = 'coins';
        }
        if (this.two == 'coins') {
            this.two1 = 'clover';
        }
        if (this.two == 'clover') {
            this.two1 = 'lemon';
        }
        if (this.two == 'lemon') {
            this.two1 = 'watermelon';
        }
        if (this.two == 'watermelon') {
            this.two1 = 'Litchi';
        }
        if (this.two == 'Litchi') {
            this.two1 = 'seven';
        }
        if (this.two == 'seven') {
            this.two1 = 'Diamonds';
        }
        if (this.two == 'Diamonds') {
            this.two1 = 'coins';
        }
        if (this.three == 'coins') {
            this.three1 = 'clover';
        }
        if (this.three == 'clover') {
            this.three1 = 'lemon';
        }
        if (this.three == 'lemon') {
            this.three1 = 'watermelon';
        }
        if (this.three == 'watermelon') {
            this.three1 = 'Litchi';
        }
        if (this.three == 'Litchi') {
            this.three1 = 'seven';
        }
        if (this.three == 'seven') {
            this.three1 = 'Diamonds';
        }
        if (this.three == 'Diamonds') {
            this.three1 = 'coins';
        }
    };
    play.prototype.fost3 = function () {
        if (this.one == 'clover') {
            this.one2 = 'coins';
        }
        if (this.one == 'lemon') {
            this.one2 = 'clover';
        }
        if (this.one == 'watermelon') {
            this.one2 = 'lemon';
        }
        if (this.one == 'Litchi') {
            this.one2 = 'watermelon';
        }
        if (this.one == 'seven') {
            this.one2 = 'Litchi';
        }
        if (this.one == 'Diamonds') {
            this.one2 = 'seven';
        }
        if (this.one == 'coins') {
            this.one2 = 'Diamonds';
        }
        if (this.two == 'clover') {
            this.two2 = 'coins';
        }
        if (this.two == 'lemon') {
            this.two2 = 'clover';
        }
        if (this.two == 'watermelon') {
            this.two2 = 'lemon';
        }
        if (this.two == 'Litchi') {
            this.two2 = 'watermelon';
        }
        if (this.two == 'seven') {
            this.two2 = 'Litchi';
        }
        if (this.two == 'Diamonds') {
            this.two2 = 'seven';
        }
        if (this.two == 'coins') {
            this.two2 = 'Diamonds';
        }
        if (this.three == 'clover') {
            this.three2 = 'coins';
        }
        if (this.three == 'lemon') {
            this.three2 = 'clover';
        }
        if (this.three == 'watermelon') {
            this.three2 = 'lemon';
        }
        if (this.three == 'Litchi') {
            this.three2 = 'watermelon';
        }
        if (this.three == 'seven') {
            this.three2 = 'Litchi';
        }
        if (this.three == 'Diamonds') {
            this.three2 = 'seven';
        }
        if (this.three == 'coins') {
            this.three2 = 'Diamonds';
        }
    };
    play.prototype.fost4 = function () {
        if (this.one == 'coins') {
            this.one3 = 'clover';
        }
        if (this.one == 'clover') {
            this.one3 = 'lemon';
        }
        if (this.one == 'lemon') {
            this.one3 = 'watermelon';
        }
        if (this.one == 'watermelon') {
            this.one3 = 'Litchi';
        }
        if (this.one == 'Litchi') {
            this.one3 = 'seven';
        }
        if (this.one == 'seven') {
            this.one3 = 'Diamonds';
        }
        if (this.one == 'Diamonds') {
            this.one3 = 'coins';
        }
        if (this.two == 'clover') {
            this.two3 = 'clover';
        }
        if (this.two == 'lemon') {
            this.two3 = 'lemon';
        }
        if (this.two == 'watermelon') {
            this.two3 = 'watermelon';
        }
        if (this.two == 'Litchi') {
            this.two3 = 'Litchi';
        }
        if (this.two == 'seven') {
            this.two3 = 'seven';
        }
        if (this.two == 'Diamonds') {
            this.two3 = 'Diamonds';
        }
        if (this.two == 'coins') {
            this.two3 = 'coins';
        }
        if (this.three == 'clover') {
            this.three3 = 'coins';
        }
        if (this.three == 'lemon') {
            this.three3 = 'clover';
        }
        if (this.three == 'watermelon') {
            this.three3 = 'lemon';
        }
        if (this.three == 'Litchi') {
            this.three3 = 'watermelon';
        }
        if (this.three == 'seven') {
            this.three3 = 'Litchi';
        }
        if (this.three == 'Diamonds') {
            this.three3 = 'seven';
        }
        if (this.three == 'coins') {
            this.three3 = 'Diamonds';
        }
    };
    play.prototype.fost5 = function () {
        if (this.one == 'coins') {
            this.one4 = 'Diamonds';
        }
        if (this.one == 'clover') {
            this.one4 = 'coins';
        }
        if (this.one == 'lemon') {
            this.one4 = 'clover';
        }
        if (this.one == 'watermelon') {
            this.one4 = 'lemon';
        }
        if (this.one == 'Litchi') {
            this.one4 = 'watermelon';
        }
        if (this.one == 'seven') {
            this.one4 = 'Litchi';
        }
        if (this.one == 'Diamonds') {
            this.one4 = 'seven';
        }
        if (this.two == 'clover') {
            this.two4 = 'clover';
        }
        if (this.two == 'lemon') {
            this.two4 = 'lemon';
        }
        if (this.two == 'watermelon') {
            this.two4 = 'watermelon';
        }
        if (this.two == 'Litchi') {
            this.two4 = 'Litchi';
        }
        if (this.two == 'seven') {
            this.two4 = 'seven';
        }
        if (this.two == 'Diamonds') {
            this.two4 = 'Diamonds';
        }
        if (this.two == 'coins') {
            this.two4 = 'coins';
        }
        if (this.three == 'coins') {
            this.three4 = 'clover';
        }
        if (this.three == 'clover') {
            this.three4 = 'lemon';
        }
        if (this.three == 'lemon') {
            this.three4 = 'watermelon';
        }
        if (this.three == 'watermelon') {
            this.three4 = 'Litchi';
        }
        if (this.three == 'Litchi') {
            this.three4 = 'seven';
        }
        if (this.three == 'seven') {
            this.three4 = 'Diamonds';
        }
        if (this.three == 'Diamonds') {
            this.three4 = 'coins';
        }
    };
    play.prototype.fost = function () {
        console.log('数值计算 play进行过');
        //this.a()
        //console.log(5745580108)
        this.fost2();
        this.fost3();
        this.fost4();
        this.fost5();
        if (this.one == 'coins') {
            if (this.two == 'coins') {
                if (this.three == 'coins') {
                    Player._many = Player._many + 1500 * this.double;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
            if (this.three == 'coins') {
                if (this.two == 'coins') {
                    return null;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
        }
        if (this.two == 'coins') {
            if (this.three == 'coins') {
                if (this.one == 'coins') {
                    return null;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
        }
        //////////////////////////////////
        if (this.one == 'seven') {
            if (this.two == 'seven') {
                if (this.three == 'seven') {
                    Player._many = Player._many + 500 * this.double;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
            if (this.three == 'seven') {
                if (this.two == 'seven') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        if (this.two == 'seven') {
            if (this.three == 'seven') {
                if (this.one == 'seven') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////
        if (this.one == 'Diamonds') {
            if (this.two == 'Diamonds') {
                if (this.three == 'Diamonds') {
                    Player._many = Player._many + 50 * this.double;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
            if (this.three == 'Diamonds') {
                if (this.two == 'Diamonds') {
                    return null;
                }
                else {
                    Player._many = (Player._many + 5 * this.double);
                }
            }
        }
        if (this.two == 'Diamonds') {
            if (this.three == 'Diamonds') {
                if (this.one == 'Diamonds') {
                    return null;
                }
                else {
                    Player._many = (Player._many + 5 * this.double);
                }
            }
        }
        ///////////////////////////////////////////////////
        if (this.one == 'clover') {
            if (this.two == 'clover') {
                if (this.three == 'clover') {
                    Player._many = Player._many + 25 * this.double;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
            if (this.three == 'clover') {
                if (this.two == 'clover') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        if (this.two == 'clover') {
            if (this.three == 'clover') {
                if (this.one == 'clover') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        //////////////////////////////////////////////////////
        if (this.one == 'watermelon') {
            if (this.two == 'watermelon') {
                if (this.three == 'watermelon') {
                    Player._many = Player._many + 15 * this.double;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
            if (this.three == 'watermelon') {
                if (this.two == 'watermelon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        if (this.two == 'watermelon') {
            if (this.three == 'watermelon') {
                if (this.one == 'watermelon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////
        if (this.one == 'lemon') {
            if (this.two == 'lemon') {
                if (this.three == 'lemon') {
                    Player._many = Player._many + 10 * this.double;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
            if (this.three == 'lemon') {
                if (this.two == 'lemon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        if (this.two == 'lemon') {
            if (this.three == 'lemon') {
                if (this.one == 'lemon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        ///////////////////////////////////////////
        if (this.one == 'Litchi') {
            if (this.two == 'Litchi') {
                if (this.three == 'Litchi') {
                    Player._many = Player._many + 5 * this.double;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
            if (this.three == 'Litchi') {
                if (this.two == 'Litchi') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        if (this.two == 'Litchi') {
            if (this.three == 'Litchi') {
                if (this.one == 'Litchi') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        /////////////////////////////////////////////
        if (this.one == 'bad') {
            if (this.two == 'bad') {
                if (this.three == 'bad') {
                    Player._many = Player._many + 150 * this.double;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
            if (this.three == 'bad') {
                if (this.two == 'bad') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        if (this.two == 'bad') {
            if (this.three == 'bad') {
                if (this.one == 'bad') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (this.one1 == 'coins') {
            if (this.two1 == 'coins') {
                if (this.three1 == 'coins') {
                    Player._many = Player._many + 1500 * this.double;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
            if (this.three1 == 'coins') {
                if (this.two1 == 'coins') {
                    return null;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
        }
        if (this.two1 == 'coins') {
            if (this.three1 == 'coins') {
                if (this.one1 == 'coins') {
                    return null;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
        }
        //////////////////////////////////
        if (this.one1 == 'seven') {
            if (this.two1 == 'seven') {
                if (this.three1 == 'seven') {
                    Player._many = Player._many + 500 * this.double;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
            if (this.three1 == 'seven') {
                if (this.two1 == 'seven') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        if (this.two1 == 'seven') {
            if (this.three1 == 'seven') {
                if (this.one1 == 'seven') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////
        if (this.one1 == 'Diamonds') {
            if (this.two1 == 'Diamonds') {
                if (this.three1 == 'Diamonds') {
                    Player._many = Player._many + 50 * this.double;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
            if (this.three1 == 'Diamonds') {
                if (this.two1 == 'Diamonds') {
                    return null;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
        }
        if (this.two1 == 'Diamonds') {
            if (this.three1 == 'Diamonds') {
                if (this.one1 == 'Diamonds') {
                    return null;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
        }
        ///////////////////////////////////////////////////
        if (this.one1 == 'clover') {
            if (this.two1 == 'clover') {
                if (this.three1 == 'clover') {
                    Player._many = Player._many + 25 * this.double;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
            if (this.three1 == 'clover') {
                if (this.two1 == 'clover') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        if (this.two1 == 'clover') {
            if (this.three1 == 'clover') {
                if (this.one1 == 'clover') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        //////////////////////////////////////////////////////
        if (this.one1 == 'watermelon') {
            if (this.two1 == 'watermelon') {
                if (this.three1 == 'watermelon') {
                    Player._many = Player._many + 15 * this.double;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
            if (this.three1 == 'watermelon') {
                if (this.two1 == 'watermelon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        if (this.two1 == 'watermelon') {
            if (this.three1 == 'watermelon') {
                if (this.one1 == 'watermelon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////
        if (this.one1 == 'lemon') {
            if (this.two1 == 'lemon') {
                if (this.three1 == 'lemon') {
                    Player._many = Player._many + 10 * this.double;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
            if (this.three1 == 'lemon') {
                if (this.two1 == 'lemon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        if (this.two1 == 'lemon') {
            if (this.three1 == 'lemon') {
                if (this.one1 == 'lemon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        ///////////////////////////////////////////
        if (this.one1 == 'Litchi') {
            if (this.two1 == 'Litchi') {
                if (this.three1 == 'Litchi') {
                    Player._many = Player._many + 5 * this.double;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
            if (this.three1 == 'Litchi') {
                if (this.two1 == 'Litchi') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        if (this.two1 == 'Litchi') {
            if (this.three1 == 'Litchi') {
                if (this.one1 == 'Litchi') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        /////////////////////////////////////////////
        if (this.one1 == 'bad') {
            if (this.two1 == 'bad') {
                if (this.three1 == 'bad') {
                    Player._many = Player._many + 150 * this.double;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
            if (this.three1 == 'bad') {
                if (this.two1 == 'bad') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        if (this.two1 == 'bad') {
            if (this.three1 == 'bad') {
                if (this.one1 == 'bad') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (this.one2 == 'coins') {
            if (this.two2 == 'coins') {
                if (this.three2 == 'coins') {
                    Player._many = Player._many + 1500 * this.double;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
            if (this.three2 == 'coins') {
                if (this.two2 == 'coins') {
                    return null;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
        }
        if (this.two2 == 'coins') {
            if (this.three2 == 'coins') {
                if (this.one2 == 'coins') {
                    return null;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
        }
        //////////////////////////////////
        if (this.one2 == 'seven') {
            if (this.two2 == 'seven') {
                if (this.three2 == 'seven') {
                    Player._many = Player._many + 500 * this.double;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
            if (this.three2 == 'seven') {
                if (this.two2 == 'seven') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        if (this.two2 == 'seven') {
            if (this.three2 == 'seven') {
                if (this.one2 == 'seven') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////
        if (this.one2 == 'Diamonds') {
            if (this.two2 == 'Diamonds') {
                if (this.three2 == 'Diamonds') {
                    Player._many = Player._many + 50 * this.double;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
            if (this.three2 == 'Diamonds') {
                if (this.two2 == 'Diamonds') {
                    return null;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
        }
        if (this.two2 == 'Diamonds') {
            if (this.three2 == 'Diamonds') {
                if (this.one2 == 'Diamonds') {
                    return null;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
        }
        ///////////////////////////////////////////////////
        if (this.one2 == 'clover') {
            if (this.two2 == 'clover') {
                if (this.three2 == 'clover') {
                    Player._many = Player._many + 25 * this.double;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
            if (this.three2 == 'clover') {
                if (this.two2 == 'clover') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        if (this.two2 == 'clover') {
            if (this.three2 == 'clover') {
                if (this.one2 == 'clover') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        //////////////////////////////////////////////////////
        if (this.one2 == 'watermelon') {
            if (this.two2 == 'watermelon') {
                if (this.three2 == 'watermelon') {
                    Player._many = Player._many + 15 * this.double;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
            if (this.three2 == 'watermelon') {
                if (this.two2 == 'watermelon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        if (this.two2 == 'watermelon') {
            if (this.three2 == 'watermelon') {
                if (this.one2 == 'watermelon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////
        if (this.one2 == 'lemon') {
            if (this.two2 == 'lemon') {
                if (this.three2 == 'lemon') {
                    Player._many = Player._many + 10 * this.double;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
            if (this.three2 == 'lemon') {
                if (this.two2 == 'lemon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        if (this.two2 == 'lemon') {
            if (this.three2 == 'lemon') {
                if (this.one2 == 'lemon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        ///////////////////////////////////////////
        if (this.one2 == 'Litchi') {
            if (this.two2 == 'Litchi') {
                if (this.three2 == 'Litchi') {
                    Player._many = Player._many + 5 * this.double;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
            if (this.three2 == 'Litchi') {
                if (this.two2 == 'Litchi') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        if (this.two2 == 'Litchi') {
            if (this.three2 == 'Litchi') {
                if (this.one2 == 'Litchi') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        /////////////////////////////////////////////
        if (this.one == 'bad') {
            if (this.two == 'bad') {
                if (this.three == 'bad') {
                    Player._many = Player._many + 150 * this.double;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
            if (this.three == 'bad') {
                if (this.two == 'bad') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        if (this.two == 'bad') {
            if (this.three == 'bad') {
                if (this.one == 'bad') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (this.one3 == 'coins') {
            if (this.two3 == 'coins') {
                if (this.three3 == 'coins') {
                    Player._many = Player._many + 1500 * this.double;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
            if (this.three3 == 'coins') {
                if (this.two3 == 'coins') {
                    return null;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
        }
        if (this.two3 == 'coins') {
            if (this.three3 == 'coins') {
                if (this.one3 == 'coins') {
                    return null;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
        }
        //////////////////////////////////
        if (this.one3 == 'seven') {
            if (this.two3 == 'seven') {
                if (this.three3 == 'seven') {
                    Player._many = Player._many + 500 * this.double;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
            if (this.three3 == 'seven') {
                if (this.two3 == 'seven') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        if (this.two3 == 'seven') {
            if (this.three3 == 'seven') {
                if (this.one3 == 'seven') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////
        if (this.one3 == 'Diamonds') {
            if (this.two3 == 'Diamonds') {
                if (this.three3 == 'Diamonds') {
                    Player._many = Player._many + 50 * this.double;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
            if (this.three3 == 'Diamonds') {
                if (this.two3 == 'Diamonds') {
                    return null;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
        }
        if (this.two3 == 'Diamonds') {
            if (this.three3 == 'Diamonds') {
                if (this.one3 == 'Diamonds') {
                    return null;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
        }
        ///////////////////////////////////////////////////
        if (this.one3 == 'clover') {
            if (this.two3 == 'clover') {
                if (this.three3 == 'clover') {
                    Player._many = Player._many + 25 * this.double;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
            if (this.three3 == 'clover') {
                if (this.two3 == 'clover') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        if (this.two3 == 'clover') {
            if (this.three3 == 'clover') {
                if (this.one3 == 'clover') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        //////////////////////////////////////////////////////
        if (this.one3 == 'watermelon') {
            if (this.two3 == 'watermelon') {
                if (this.three3 == 'watermelon') {
                    Player._many = Player._many + 15 * this.double;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
            if (this.three3 == 'watermelon') {
                if (this.two3 == 'watermelon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        if (this.two3 == 'watermelon') {
            if (this.three3 == 'watermelon') {
                if (this.one3 == 'watermelon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////
        if (this.one3 == 'lemon') {
            if (this.two3 == 'lemon') {
                if (this.three3 == 'lemon') {
                    Player._many = Player._many + 10 * this.double;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
            if (this.three3 == 'lemon') {
                if (this.two3 == 'lemon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        if (this.two3 == 'lemon') {
            if (this.three3 == 'lemon') {
                if (this.one3 == 'lemon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        ///////////////////////////////////////////
        if (this.one3 == 'Litchi') {
            if (this.two3 == 'Litchi') {
                if (this.three3 == 'Litchi') {
                    Player._many = Player._many + 5 * this.double;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
            if (this.three3 == 'Litchi') {
                if (this.two3 == 'Litchi') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        if (this.two3 == 'Litchi') {
            if (this.three3 == 'Litchi') {
                if (this.one3 == 'Litchi') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (this.one4 == 'coins') {
            if (this.two4 == 'coins') {
                if (this.three4 == 'coins') {
                    Player._many = Player._many + 1500 * this.double;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
            if (this.three4 == 'coins') {
                if (this.two4 == 'coins') {
                    return null;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
        }
        if (this.two4 == 'coins') {
            if (this.three4 == 'coins') {
                if (this.one4 == 'coins') {
                    return null;
                }
                else {
                    Player._many = Player._many + 150 * this.double;
                }
            }
        }
        //////////////////////////////////
        if (this.one4 == 'seven') {
            if (this.two4 == 'seven') {
                if (this.three4 == 'seven') {
                    Player._many = Player._many + 500 * this.double;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
            if (this.three4 == 'seven') {
                if (this.two4 == 'seven') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        if (this.two4 == 'seven') {
            if (this.three4 == 'seven') {
                if (this.one4 == 'seven') {
                    return null;
                }
                else {
                    Player._many = Player._many + 50 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////
        if (this.one4 == 'Diamonds') {
            if (this.two4 == 'Diamonds') {
                if (this.three4 == 'Diamonds') {
                    Player._many = Player._many + 50 * this.double;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
            if (this.three4 == 'Diamonds') {
                if (this.two4 == 'Diamonds') {
                    return null;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
        }
        if (this.two4 == 'Diamonds') {
            if (this.three4 == 'Diamonds') {
                if (this.one4 == 'Diamonds') {
                    return null;
                }
                else {
                    Player._many = Player._many + 5 * this.double;
                }
            }
        }
        ///////////////////////////////////////////////////
        if (this.one4 == 'clover') {
            if (this.two4 == 'clover') {
                if (this.three4 == 'clover') {
                    Player._many = Player._many + 25 * this.double;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
            if (this.three4 == 'clover') {
                if (this.two4 == 'clover') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        if (this.two4 == 'clover') {
            if (this.three4 == 'clover') {
                if (this.one4 == 'clover') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        //////////////////////////////////////////////////////
        if (this.one4 == 'watermelon') {
            if (this.two4 == 'watermelon') {
                if (this.three4 == 'watermelon') {
                    Player._many = Player._many + 15 * this.double;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
            if (this.three4 == 'watermelon') {
                if (this.two4 == 'watermelon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        if (this.two4 == 'watermelon') {
            if (this.three4 == 'watermelon') {
                if (this.one4 == 'watermelon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 2 * this.double;
                }
            }
        }
        /////////////////////////////////////////////////
        if (this.one4 == 'lemon') {
            if (this.two4 == 'lemon') {
                if (this.three4 == 'lemon') {
                    Player._many = Player._many + 10 * this.double;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
            if (this.three4 == 'lemon') {
                if (this.two4 == 'lemon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        if (this.two4 == 'lemon') {
            if (this.three4 == 'lemon') {
                if (this.one4 == 'lemon') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        ///////////////////////////////////////////
        if (this.one4 == 'Litchi') {
            if (this.two4 == 'Litchi') {
                if (this.three4 == 'Litchi') {
                    Player._many = Player._many + 5 * this.double;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
            if (this.three4 == 'Litchi') {
                if (this.two4 == 'Litchi') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
        if (this.two4 == 'Litchi') {
            if (this.three4 == 'Litchi') {
                if (this.one4 == 'Litchi') {
                    return null;
                }
                else {
                    Player._many = Player._many + 1 * this.double;
                }
            }
        }
    };
    //  public static Instance():play { // 这个难道是判断？
    //      //原型链上有也是传false和true能出来null？
    //             if(play.instance == null) {
    //                 play.instance = new play();
    //             }
    //             return play.instance;
    //         }
    play.prototype.GetIsNewBe = function () {
        return this.m_isNewBe;
    };
    play.prototype.GetNetStep = function () {
        return this.m_netStep;
    };
    play.prototype.GetID = function () {
        return this.m_id;
    };
    play.prototype.SetNetStep = function (v) {
        this.m_netStep = v;
    };
    play.instance = null;
    return play;
}());
__reflect(play.prototype, "play");
var Play = new play;
//# sourceMappingURL=play.js.map