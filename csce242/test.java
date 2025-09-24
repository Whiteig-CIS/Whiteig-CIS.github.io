package csce242;

public class test {
	 public static void main(String[] args) {
        int input = 3;
        int s = 0;
		for (int i = 1; i <= input; ++i) {
            s += i * i * i;
        }
        System.out.println(s);
	}
}