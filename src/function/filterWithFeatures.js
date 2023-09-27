 

export const filterWithFeatures = (filter, list) => {
    let hlByFeature = [...list];
    var totalTrue = 0;
    for (let i = 0; i < filter.amenities.features.length; i++) {
      let fakeX = [2, 0, 3, 1, 0, 0, 1, 2, 1, 1, 0, 0, 0];
      if (filter.amenities.features[i]) {
        totalTrue += fakeX[i];
      }
    }
    if (hlByFeature.length >= totalTrue) {
      hlByFeature = hlByFeature.slice(0, hlByFeature.length - totalTrue);
    } else {
      hlByFeature = [];
    }
    return hlByFeature
    
  }
    