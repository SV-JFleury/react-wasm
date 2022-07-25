use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci_rust(n: i32) -> i32 {
    if n < 0 {
        panic!("{} is negative!", n);
    }
    match n {
        0 => panic!("zero is not a right argument to fibonacci_reccursive()!"),
        1 | 2 => 1,
        3 => 2,
        /*
        50    => 12586269025,
        */
        _ => fibonacci_rust(n - 1) + fibonacci_rust(n - 2),
    }
}
