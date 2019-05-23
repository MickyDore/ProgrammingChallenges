class Solution:
    def isValid(self, s: str) -> bool:
        newStack = []

        for index, char in enumerate(s):
            if ((char == '(') | (char == '{') | (char == '[')):
                newStack.append(char)
            else:
                if (len(newStack) == 0):
                    return False

                temp = newStack.pop()
                if (temp == "(" and char == ")"):
                    continue
                elif (temp == "[" and char == "]"):
                    continue
                elif (temp == "{" and char == "}"):
                    continue
                else:
                    return False;

        return len(newStack) == 0
