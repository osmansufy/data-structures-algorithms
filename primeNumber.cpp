class Solution
{
public:
    int countPrimes(int n)
    {
          if (n <= 2)
            return 0;
        int count = 0;
        for (int i = n; i > 1; i--)
        {

            int temp = 2;
            for (int j; j < n; j++)
            {
                if (i % j == 0)
                {
                    break;
                }
                temp++;
            }
            if (temp == (i - 1))
            {
                count++;
            }
        }
    
        return count;
    };
};