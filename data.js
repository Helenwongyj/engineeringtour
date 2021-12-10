var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.15445706275976256,
        "pitch": -0.2459675456139241,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22284386371987708,
          "pitch": -0.10391425738365356,
          "rotation": 11.780972450961727,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.615749040218466,
          "pitch": -0.02817120927814898,
          "title": "Faculty of Engineering",
          "text": "Welcome to Engineering Drive"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.13336131516624583,
        "pitch": 0.05224431660085749,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07681878450866364,
          "pitch": 0.2861756356166474,
          "rotation": 3.141592653589793,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.13336131516624583,
          "pitch": 0.05224431660085749,
          "title": "Air conditioned atrium",
          "text": "A place to study in groups for your upcoming projects!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.14186693523829774,
        "pitch": -0.1385907779250939,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5696392179323304,
          "pitch": -0.08562485939060238,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.11815161385301742,
          "pitch": 0.06999574148687415,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.14186693523829774,
          "pitch": -0.1385907779250939,
          "title": "Faculty of Engineering Block 4",
          "text": "Entrance of atrium"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
