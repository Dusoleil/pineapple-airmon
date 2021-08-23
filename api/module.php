<?php namespace pineapple;

class airmon extends Module
{
    public function route()
    {
        switch ($this->request->action)
        {
            case 'getInterfaces':
                $this->getInterfaces();
                break;
            case 'startMonitor':
                $this->startMonitor();
                break;
            case 'stopMonitor':
                $this->stopMonitor();
                break;
        }
    }

    private function getInterfaces()
    {
        $interfaces = array();
        exec("iwconfig 2>/dev/null | grep 'wlan' | awk '{print $1}'",$interfaces);
        $this->response = array("interfaces" => $interfaces);
    }

    private function startMonitor()
    {
        exec("airmon-ng start ".$this->request->interface);
    }

    private function stopMonitor()
    {
        exec("airmon-ng stop ".$this->request->interface);
    }
}

?>
