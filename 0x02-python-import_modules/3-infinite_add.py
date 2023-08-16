#!/usr/bin/python3

if __name__ == "__main__":
    """Print the addition of all arguments."""
    from sys import sys
    result = 0
    for arg in argv[1:]:
        result += int(arg)
    print("{:d}".format(result))
