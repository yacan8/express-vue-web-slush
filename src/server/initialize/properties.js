/**
 * @file properties
 */
import properties from 'properties';
import path from 'path';

const propertiesPath = path.resolve(process.cwd(), 'config.properties');

export default function load() {
  return new Promise((resolve, reject) => {
    properties.parse(propertiesPath, { path: true, sections: true }, (err, obj) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(obj);
    });
  }).catch(e => {
    console.error(e);
    return {};
  });
}