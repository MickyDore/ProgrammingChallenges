def part_1():
    total = 0  # Begin total at 0
    for frequency in open('frequencies.txt'):  # For each frequency in the list
        total += int(frequency)  # Update total frequency
    return total  # Return the total frequency


def part_2():
    total = 0
    total_frequencies = {0}  # Create a set to store previous total frequencies

    while True:  # Run until we get a duplicate
        for frequency in open('frequencies.txt'):  # For each frequency in the list
            total += int(frequency)  # Update total frequency
            if total in total_frequencies:  # If the frequency is already in the list
                return total  # Return the total
            total_frequencies.add(total)  # Otherwise add to set of total frequencies


print(part_1())
print(part_2())

