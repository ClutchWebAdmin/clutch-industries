export default function SmallHeadingAndText({ heading, paragraph, bullets }) {
  return (
    <>
      <h5 className="font-medium">{heading}</h5>
      <p>{paragraph}</p>
      <ul className="ml-10">
        {bullets?.map((bulletPoint, index) => (
          <li className="list-disc" key={index}>
            <p>{bulletPoint}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
