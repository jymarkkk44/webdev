const Borders = ({ borders }) => (
  <div>
    <h4>Border Countries:</h4>
    <ul>
      {borders?.length ? borders.map(border => <li key={border}>{border}</li>) : <p>None</p>}
    </ul>
  </div>
);

export default Borders;
