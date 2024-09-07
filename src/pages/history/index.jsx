import React from "react";
import { Status } from "../../components/status";
import "./history.css";

export default function HistoryPage() {
  return (
    <div className="container--history">
      <h1>Meu histórico</h1>

      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Inicio</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Conserto de débitos técnicos</td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <Status variant="pink">Concluído</Status>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos</td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <Status>Concluído</Status>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos</td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <Status>Concluído</Status>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
