1.去抖函数,每次滚动执行的方法都引用同一个外部变量，导致这个变量不能被销毁，也就是闭包的一个用途，判断条件是这个唯一变量，所以只有最后的函数执行一次   

2.使用   

    a import debounce from 'debouncefun'   

    b debounce(fun,time)   

    c fun要去抖的函数，time去抖的时间   

