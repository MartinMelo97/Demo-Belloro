jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_1": {
                      "attributes": {
                        "font-size": "7.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_1 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "7.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_2": {
                      "attributes": {
                        "font-size": "7.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_2 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "7.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_3": {
                      "attributes": {
                        "font-size": "7.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_3 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "7.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_4": {
                      "attributes": {
                        "font-size": "7.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_4 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "7.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_11",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_47",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_12",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_25",
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_7": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Book Antiqua,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_7 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Book Antiqua,Arial",
                        "font-size": "10.0pt",
                        "font-style": "italic",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_8": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Book Antiqua,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_8 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_8 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Book Antiqua,Arial",
                        "font-size": "10.0pt",
                        "font-style": "italic",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_9": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Book Antiqua,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_9 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_9 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Book Antiqua,Arial",
                        "font-size": "10.0pt",
                        "font-style": "italic",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_10": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Book Antiqua,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_10 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Book Antiqua,Arial",
                        "font-size": "10.0pt",
                        "font-style": "italic",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_11": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Book Antiqua,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_11 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Book Antiqua,Arial",
                        "font-size": "10.0pt",
                        "font-style": "italic",
                        "font-weight": "700"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_2": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_2": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_2": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_4": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_5": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_5": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_5": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_7": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_8": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_18") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_10": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_10": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_10": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3": {
                      "attributes": {
                        "background-color": "#001119",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Book Antiqua,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Book Antiqua,Arial",
                        "font-size": "12.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#001119",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_6": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "27px",
                        "font-size": "14.0pt",
                        "font-family": "Book Antiqua,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_6 span": {
                      "attributes": {
                        "color": "#001119",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Book Antiqua,Arial",
                        "font-size": "14.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_6": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_1": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "8.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_1 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_1 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_2": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_2 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_3": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_3 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_4": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_4 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "8.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_5 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_5": {
                      "attributes": {
                        "font-size": "22.0pt",
                        "font-family": "FontAwesomeJiM-Regular,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_5 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "FontAwesomeJiM-Regular,Arial",
                        "font-size": "22.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_28") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_28": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "font-size": "12.0pt",
                        "font-family": "Book Antiqua,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_28 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_28 span": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Book Antiqua,Arial",
                        "font-size": "12.0pt",
                        "font-style": "italic",
                        "font-weight": "700"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_28": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_13",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 650,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_26",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_27",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_28",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_26") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_15",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_29",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_30",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_31",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_27") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_16",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_32",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_33",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_34",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_28") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_17",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_35",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_36",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_37",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_29") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_18",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_38",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_39",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_40",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_30") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_19",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_41",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_42",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_43",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_31") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_20",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_44",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_45",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_46",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_32") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_21",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_47",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_48",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_49",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_33") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_22",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_50",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_51",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_52",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_34") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_23",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_53",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_54",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_55",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_35") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_24",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_56",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_57",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_58",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_36") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rectangle_25",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_59",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_60",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_61",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 800,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_6 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "9.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_9",
                    "width": {
                      "type": "exprvalue",
                      "value": "40"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "40"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_36") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_36",
                    "width": {
                      "type": "exprvalue",
                      "value": "40"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "40"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_48") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_48",
                    "width": {
                      "type": "exprvalue",
                      "value": "40"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "40"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_49") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_49",
                    "width": {
                      "type": "exprvalue",
                      "value": "40"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "40"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_50") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Image_50",
                    "width": {
                      "type": "exprvalue",
                      "value": "40"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "40"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_64") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_64": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_64 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_64 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_64": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_65") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_65": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_65 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_65 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_65": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_66") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_66": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_66 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_66 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_66": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_67") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_67": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_67 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_67 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_67": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_68") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_68": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_68 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_68 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_68": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_69") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_69": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_69 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_69 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_69": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_70") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_70": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_70 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_70 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_70": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_71") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_71": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_71 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_71 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_71": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_72") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_72": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_72 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_72 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_72": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_73") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_73": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_73 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_73 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_73": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_74") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_74": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_74 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_74 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_74": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_75") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_75": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_75 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_75 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_75": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_76") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_76": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "font-size": "10.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_76 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_76 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Arial,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_76": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF3B18",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF3B18",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF3B18",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF3B18",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#FF3B18",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_26")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_27")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_28")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_29")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_30")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_31")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_32")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_33")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_34")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_35")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_36")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_36")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_48")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_49")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_50")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_64")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_65")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_66")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_67")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_68")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_69")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_70")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_71")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_72")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_73")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_74")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_75")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_76")) {
      jEvent.undoCases(jFirer);
    }
  });