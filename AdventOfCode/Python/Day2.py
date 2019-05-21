boxes = open('box_ids.txt', 'r').readlines()

def part_1():
    sum_of_doubles = 0  # How many double characters appear
    sum_of_triples = 0  # How many triple characters appear

    for box_id in boxes:
        number_of_appearances = []
        for c in box_id:  # For each character in the string
            number_of_appearances.append(box_id.count(c))  # Check how many times it occurs and add to list
        if 2 in number_of_appearances:
            sum_of_doubles += 1
        if 3 in number_of_appearances:
            sum_of_triples += 1

    return sum_of_doubles * sum_of_triples  # Return the checksum


arr = ["h", "j", "k"];


def part_2():
    x = "".join(arr);
    print(x)
    for box1 in boxes:
        for box2 in boxes:
            if box1 == box2:
                print(box1)


print(part_1())
print(part_2())
