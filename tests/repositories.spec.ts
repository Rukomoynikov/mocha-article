import { expect } from 'chai';
import axios, {AxiosRequestConfig} from 'axios';
import {Report} from "../github-api-typings";

describe('Repositories', () => {
  describe('searching', () => {

    it('should to response with data', async () => {
      const params = { params: {q: "javascript"} }
      const response = await axios.get<Report>("https://api.github.com/search/repositories", params)

      expect(response.data).to.have.all.keys(["total_count", "incomplete_results", "items"])
    });

    it('should to response with zero items for incorrect request', async () => {
      const params = { params: {q: "nonexistingrequestquery"} }
      const response = await axios.get<Report>("https://api.github.com/search/repositories", params)

      expect(response.data.total_count).to.equal(0)
    });
  })
});
