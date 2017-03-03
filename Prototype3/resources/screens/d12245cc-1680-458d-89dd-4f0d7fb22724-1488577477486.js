jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Paragraph_2"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Table_1"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_37"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_38"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_39"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_40"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_35": {
                      "attributes": {
                        "background-color": "#00111A",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_35": {
                      "attributes-ie": {
                        "-pie-background": "#00111A",
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
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_36": {
                      "attributes": {
                        "background-color": "#00111A",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_36": {
                      "attributes-ie": {
                        "-pie-background": "#00111A",
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
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Paragraph_3"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_10"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Input_7"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Input_5"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Input_6"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_4"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_34": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_34": {
                      "attributes-ie": {
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
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Paragraph_2"
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
                    "target": "#s-Table_1"
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
                    "target": "#s-Text_37"
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
                    "target": "#s-Text_38"
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
                    "target": "#s-Text_39"
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
                    "target": "#s-Text_40"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_35": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_35": {
                      "attributes-ie": {
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
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_36": {
                      "attributes": {
                        "background-color": "#00111A",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_36": {
                      "attributes-ie": {
                        "-pie-background": "#00111A",
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
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Paragraph_3"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_10"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Input_7"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Input_5"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Input_6"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_4"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_34": {
                      "attributes": {
                        "background-color": "#00111A",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_34": {
                      "attributes-ie": {
                        "-pie-background": "#00111A",
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
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Paragraph_2"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Table_1"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_37"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_38"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_39"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_40"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_36": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_36": {
                      "attributes-ie": {
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
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_35": {
                      "attributes": {
                        "background-color": "#00111A",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_35": {
                      "attributes-ie": {
                        "-pie-background": "#00111A",
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
                    "target": "#s-Paragraph_3"
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
                    "target": "#s-Image_10"
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
                    "target": "#s-Input_7"
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
                    "target": "#s-Input_5"
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
                    "target": "#s-Input_6"
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
                    "target": "#s-Rectangle_4"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_34": {
                      "attributes": {
                        "background-color": "#00111A",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_34": {
                      "attributes-ie": {
                        "-pie-background": "#00111A",
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
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_5": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#0088CC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0088CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0088CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0088CC",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(339 - 1 - 1 - 7 - 2, 0) + 'px'",
                        "height": "Math.max(31 - 1 - 1 - 2 - 2, 0) + 'px'"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_6": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#0088CC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0088CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0088CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0088CC",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(339 - 1 - 1 - 7 - 2, 0) + 'px'",
                        "height": "Math.max(31 - 1 - 1 - 2 - 2, 0) + 'px'"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#0088CC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0088CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0088CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0088CC",
                        "border-radius": "0px 0px 0px 0px"
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_5": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(339 - 1 - 1 - 7 - 2, 0) + 'px'",
                        "height": "Math.max(31 - 1 - 1 - 2 - 2, 0) + 'px'"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_6": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(339 - 1 - 1 - 7 - 2, 0) + 'px'",
                        "height": "Math.max(31 - 1 - 1 - 2 - 2, 0) + 'px'"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Input_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-Text_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_12": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Bookman Old Style,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_12 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Bookman Old Style,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "300"
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
    } else if(jFirer.is("#s-Text_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_14": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Bookman Old Style,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_14 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Bookman Old Style,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "300"
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
    } else if(jFirer.is("#s-Text_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_16": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "Bookman Old Style,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_16 span": {
                      "attributes": {
                        "color": "#FF3B18",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Bookman Old Style,Arial",
                        "font-size": "10.0pt",
                        "font-style": "normal",
                        "font-weight": "300"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_9 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_9": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#001119",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#001119",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#001119",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#001119",
                        "border-radius": "0px 0px 0px 0px"
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
    } else if(jFirer.is("#s-Label_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_3": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "font-size": "22.0pt",
                        "font-family": "FontAwesomeJiM-Regular,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "FontAwesomeJiM-Regular,Arial",
                        "font-size": "22.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_3": {
                      "attributes-ie": {
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
    } else if(jFirer.is("#s-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_4": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none",
                        "font-size": "22.0pt",
                        "font-family": "FontAwesomeJiM-Regular,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "FontAwesomeJiM-Regular,Arial",
                        "font-size": "22.0pt"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Label_4": {
                      "attributes-ie": {
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
    } else if(jFirer.is("#s-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                        "background-color": "#919191",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_2": {
                      "attributes-ie": {
                        "-pie-background": "#919191",
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
    } else if(jFirer.is("#s-Text_34") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_34": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_34": {
                      "attributes-ie": {
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
    } else if(jFirer.is("#s-Text_35") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_35": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_35": {
                      "attributes-ie": {
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
    } else if(jFirer.is("#s-Text_36") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_36": {
                      "attributes": {
                        "background-color": "#FF3B18",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_36": {
                      "attributes-ie": {
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
    } else if(jFirer.is("#s-Rectangle_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11": {
                      "attributes": {
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
                        "border-radius": "0px 0px 0px 0px"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11": {
                      "attributes": {
                        "opacity": "0.25"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=25)",
                        "filter": "alpha(opacity=25)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_11": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=25)",
                        "filter": "alpha(opacity=25)"
                      }
                    }
                  } ],
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
                    "target": "#s-Rectangle_5",
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "down"
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
                    "target": "#s-Rectangle_6",
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
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
    } else if(jFirer.is("#s-Rectangle_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12": {
                      "attributes": {
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
                        "border-radius": "0px 0px 0px 0px"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12": {
                      "attributes": {
                        "opacity": "0.25"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=25)",
                        "filter": "alpha(opacity=25)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_12": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=25)",
                        "filter": "alpha(opacity=25)"
                      }
                    }
                  } ],
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
                    "target": "#s-Rectangle_7",
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "down"
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
                    "target": "#s-Rectangle_8",
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
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
    } else if(jFirer.is("#s-Rectangle_15") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13": {
                      "attributes": {
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
                        "border-radius": "0px 0px 0px 0px"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13": {
                      "attributes": {
                        "opacity": "0.25"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=25)",
                        "filter": "alpha(opacity=25)"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Image_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=25)",
                        "filter": "alpha(opacity=25)"
                      }
                    }
                  } ],
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
                    "target": "#s-Rectangle_9",
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "down"
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
                    "target": "#s-Rectangle_10",
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
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
    } else if(jFirer.is("#s-Rectangle_37") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_37": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none",
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "Book Antiqua,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_37 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_37 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_37": {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_37": {
                      "attributes": {
                        "line-height": "38px",
                        "font-size": "20.0pt",
                        "font-family": "Book Antiqua,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_37 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Rectangle_37 span": {
                      "attributes": {
                        "color": "#00111A",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Book Antiqua,Arial",
                        "font-size": "20.0pt",
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
    } else if(jFirer.is("#s-Paragraph_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "8.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_7 span": {
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
    } else if(jFirer.is("#s-Paragraph_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_8 span": {
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
    } else if(jFirer.is("#s-Paragraph_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_9 span": {
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
    } else if(jFirer.is("#s-Paragraph_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_10 span": {
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
    } else if(jFirer.is("#s-Paragraph_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_11 span": {
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
    } else if(jFirer.is("#s-Paragraph_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "9.0pt",
                        "font-family": "Arial,Arial"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 .valign": {
                      "attributes": {
                        "vertical-align": "top",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_12 span": {
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
    } else if(jFirer.is("#s-Image_59") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": "#s-Image_59",
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
    } else if(jFirer.is("#s-Image_60") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": "#s-Image_60",
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
    } else if(jFirer.is("#s-Image_61") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": "#s-Image_61",
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
    } else if(jFirer.is("#s-Image_62") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": "#s-Image_62",
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
    } else if(jFirer.is("#s-Image_63") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": "#s-Image_63",
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
    } else if(jFirer.is("#s-Text_89") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_89": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_89 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_89 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_89": {
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
    } else if(jFirer.is("#s-Text_90") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_90": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_90 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_90 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_90": {
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
    } else if(jFirer.is("#s-Text_91") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_91": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_91 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_91 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_91": {
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
    } else if(jFirer.is("#s-Text_92") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_92": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_92 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_92 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_92": {
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
    } else if(jFirer.is("#s-Text_93") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_93": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_93 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_93 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_93": {
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
    } else if(jFirer.is("#s-Text_94") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_94": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_94 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_94 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_94": {
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
    } else if(jFirer.is("#s-Text_95") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_95": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_95 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_95 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_95": {
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
    } else if(jFirer.is("#s-Text_96") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_96": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_96 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_96 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_96": {
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
    } else if(jFirer.is("#s-Text_97") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_97": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_97 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_97 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_97": {
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
    } else if(jFirer.is("#s-Text_98") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_98": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_98 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_98 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_98": {
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
    } else if(jFirer.is("#s-Text_99") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_99": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_99 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_99 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_99": {
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
    } else if(jFirer.is("#s-Text_100") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_100": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_100 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_100 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_100": {
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
    } else if(jFirer.is("#s-Text_101") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_101": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_101 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_101 span": {
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
                    "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Text_101": {
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
    } else if(jFirer.is("#s-Label_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_34")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_35")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_36")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_37")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_59")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_60")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_61")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_62")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_63")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_89")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_90")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_91")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_92")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_93")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_94")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_95")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_96")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_97")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_98")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_99")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_100")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_101")) {
      jEvent.undoCases(jFirer);
    }
  });