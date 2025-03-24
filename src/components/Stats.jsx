/* eslint-disable react/prop-types */

export default function Stats({ items }) {
  if (items.length == 0) {
    // i did that to avoid re-calculate the itemsNums, packedItems and percentage
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const itemsNums = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / itemsNums) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `👜 You have ${itemsNums} times on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
